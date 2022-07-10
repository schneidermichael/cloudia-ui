import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Region} from "../../shared/interface/region";
import {AwsService} from "../../shared/service/aws.service";
import {InstanceTypeDatabase} from "../../shared/interface/instance-type-database";

@Component({
  selector: 'app-aws-relational-database',
  templateUrl: './aws-relational-database.component.html'
})

export class AwsRelationalDatabaseComponent {

  @ViewChild('awsInstancePrice') awsInstancePrice: any;

  @Output() instanceEvent = new EventEmitter<any>();
  @Output() sizeEvent = new EventEmitter<number>();

  selectedRegion : string = 'eu-central-1';
  selectedInstanceTypeDatabase : InstanceTypeDatabase | undefined;
  selectedSize : number | undefined;
  selectedPricePerHour : number | undefined;
  selectedPricePerGb : number | undefined;


  region: Region[] | undefined;
  instanceTypeDatabase : InstanceTypeDatabase[] | undefined;

  constructor(private service : AwsService) {
    this.service.getRegionRelationalDatabaseService().subscribe(response => {
      this.region = response;
    });
    this.service.getInstanceTypeDatabase().subscribe(response => {
      this.instanceTypeDatabase = response.filter(value => value.region == this.selectedRegion);
    });
  }

  selectedRegionChanged() {
    this.service.getInstanceTypeDatabase().subscribe(response => {
      this.instanceTypeDatabase = response.filter(value => value.region == this.selectedRegion);
    });
    this.awsInstancePrice.nativeElement.value = ' ';
  }

  selectedInstanceTypeDatabaseChanged($event: any) {
    this.selectedPricePerHour = $event.price_per_hour;
    this.selectedPricePerGb = $event.price_per_gib;
    this.instanceEvent.emit($event);
  }

  selectedStorageSizeChanged($event: any) {
    this.sizeEvent.emit($event);
  }


}
