import {Component, EventEmitter, Output} from '@angular/core';
import {Region} from "../../shared/interface/region";
import {InstanceSerieDatabase} from "../../shared/interface/instance-serie-database";
import {AzureService} from "../../shared/service/azure.service";

@Component({
  selector: 'app-azure-postgresql',
  templateUrl: './azure-postgresql.component.html'

})
export class AzurePostgresqlComponent {

  @Output() instanceEvent = new EventEmitter<any>();
  @Output() sizeEvent = new EventEmitter<number>();

  selectedRegion : string = 'Central US';

  selectedSize : number | undefined;
  selectedPricePerHour : number | undefined;
  selectedPricePerGb : number | undefined;
  selectedInstanceSerieDatabase : InstanceSerieDatabase[] | undefined;

  region: Region[] | undefined;
  instanceSerieDatabase : InstanceSerieDatabase[] | undefined;

  constructor(private service : AzureService) {
    this.service.getRegionPostgresql().subscribe(response => {
      this.region = response;
    })
    this.service.getInstanceSerieDatabase().subscribe(response => {
      this.instanceSerieDatabase = response.filter(value => value.region == this.selectedRegion);
    })
  }

  selectedRegionChanged() {
    this.service.getInstanceSerieDatabase().subscribe(response => {
      this.instanceSerieDatabase = response.filter(value => value.region == this.selectedRegion);
    })
  }

  selectedInstanceSerieChanged($event: any) {
    this.selectedPricePerHour = $event.price_per_hour;
    this.selectedPricePerGb = $event.price_per_gib;
    this.instanceEvent.emit($event);
  }

  selectedStorageSizeChanged($event: any) {
    this.sizeEvent.emit($event);
  }
}
