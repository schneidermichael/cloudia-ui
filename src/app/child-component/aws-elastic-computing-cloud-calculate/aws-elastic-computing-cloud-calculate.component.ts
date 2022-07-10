import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-aws-elastic-computing-cloud-calculate',
  templateUrl: './aws-elastic-computing-cloud-calculate.component.html'
})
export class AwsElasticComputingCloudCalculateComponent {

  @Input() priceInDollar = 0;
  @Input() sizeInGigabyte = 0;

  constructor() {
    //This is empty
  }

}
