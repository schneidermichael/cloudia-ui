import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {GcpService} from "../../shared/service/gcp.service";
import {Region} from "../../shared/interface/region";
import {Image} from "../../shared/interface/image";
import {MachineType} from "../../shared/interface/machine-type";

@Component({
  selector: 'app-gcp-compute-engine',
  templateUrl: './gcp-compute-engine.component.html'
})

export class GcpComputeEngineComponent {

  @ViewChild('gcpMachinePrice') gcpMachinePrice: any;

  @Output() machineEvent = new EventEmitter<number>();
  @Output() storageSizeEvent = new EventEmitter<number>();

  selectedRegion : string = 'us-west2';
  selectedSize : number = 20;
  selectedMachineType : MachineType | undefined;
  selectedPricePerHour: number | undefined;

  region: Region[] | undefined;
  image: Image[] | undefined;
  machineType : MachineType[] | undefined;

  constructor(private service : GcpService) {
    this.service.getRegionComputeEngine().subscribe(response => this.region = response);
    this.service.getImage().subscribe(response => this.image = response);
    this.service.getMachineType().subscribe(response => {
      this.machineType = response.filter(value => value.region == this.selectedRegion);
    })
  }

  selectedRegionChanged() {
    this.service.getMachineType().subscribe(response => {
      this.machineType = response.filter(value => value.region == this.selectedRegion);
    })
    this.gcpMachinePrice.nativeElement.value = ' ';
  }

  selectedMachineTypeChanged($event: any) {
    this.machineEvent.emit($event);
    this.selectedPricePerHour = $event.price_per_hour;
  }

  selectedStorageSizeChanged(size: number) {
    this.storageSizeEvent.emit(size);
  }

}
