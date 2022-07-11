import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {AzureService} from "../../shared/service/azure.service";
import {Region} from "../../shared/interface/region";
import {InstanceSerie} from "../../shared/interface/instance-serie";
import {OperatingSystem} from "../../shared/interface/operating-system";

@Component({
  selector: 'app-azure-virtual-machine',
  templateUrl: './azure-virtual-machine.component.html'
})
export class AzureVirtualMachineComponent{

  @ViewChild('azureInstancePrice') azureInstancePrice: any;

  @Output() instanceEvent = new EventEmitter<number>();
  @Output() storageSizeEvent = new EventEmitter<number>();

  selectedRegion : string = 'East US';
  selectedSize : number = 10;
  selectedInstanceSerie : InstanceSerie | undefined;
  selectedPricePerHour: number | undefined;

  region: Region[] | undefined;
  operatingSystem: OperatingSystem[] | undefined;
  instanceSerie : InstanceSerie[] | undefined;

  constructor(private service : AzureService) {
    this.service.getRegionVirtualMachine().subscribe(response => {
      this.region = response;
    })
    this.service.getOperatingSystem().subscribe(response => {
      this.operatingSystem = response;
    })
    this.service.getInstanceSerie().subscribe(response => {
      this.instanceSerie = response.filter(value => value.region == this.selectedRegion);
    })
  }

  selectedRegionChanged() {
    this.service.getInstanceSerie().subscribe(response => {
      this.instanceSerie = response.filter(value => value.region == this.selectedRegion);
    })
    this.azureInstancePrice.nativeElement.value = ' ';
  }

  selectedInstanceSerieChanged($event: any) {
    this.instanceEvent.emit($event);
    this.selectedPricePerHour = $event.price_per_hour;

  }

  selectedStorageSizeChanged(size: number) {
    this.storageSizeEvent.emit(size);
  }

}
