import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {AwsService} from "../../shared/service/aws.service";
import {Region} from "../../shared/interface/region";
import {MachineImage} from "../../shared/interface/machine-image";
import {InstanceType} from "../../shared/interface/instance-type";

@Component({
  selector: 'app-aws-elastic-computing-cloud',
  templateUrl: './aws-elastic-computing-cloud.component.html'
})
export class AwsElasticComputingCloudComponent {

  @ViewChild('awsInstancePrice') awsInstancePrice: any;

  @Output() pricePerHourEvent = new EventEmitter<number>();
  @Output() storageSizeEvent = new EventEmitter<number>();

  selectedRegion : string = 'ca-central-1';
  selectedSize : number = 10;
  selectedInstanceType : InstanceType | undefined;

  region: Region[] | undefined;
  image: MachineImage[] | undefined;
  instanceType : InstanceType[] | undefined;

  constructor(private service : AwsService) {
    this.service.getRegionElasticCloudComputing().subscribe(response => {
      this.region = response;
    })
    this.service.getImage().subscribe(response => {
      this.image = response;
    })
    this.service.getInstanceType().subscribe(response => {
      this.instanceType = response.filter(value => value.region == this.selectedRegion);
    })
  }

  selectedRegionChanged() {
    this.service.getInstanceType().subscribe(response => {
      this.instanceType = response.filter(value => value.region == this.selectedRegion);
    })
    this.awsInstancePrice.nativeElement.value = ' ';
  }

  selectedPricePerHourChanged(price: number) {
    this.pricePerHourEvent.emit(price);
  }

  selectedStorageSizeChanged(size: number) {
    this.storageSizeEvent.emit(size);
  }

}
