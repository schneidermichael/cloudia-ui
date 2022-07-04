import { Component } from '@angular/core';
import {REGIONS, SIZES} from "../../shared/mock/mock-gcp";

@Component({
  selector: 'app-aws-elastic-computing-cloud',
  templateUrl: './aws-elastic-computing-cloud.component.html'
})
export class AwsElasticComputingCloudComponent {

  selectedSize : number | undefined;

  regions = REGIONS;
  sizes = SIZES;

  constructor() {
    //This is empty
  }

}
