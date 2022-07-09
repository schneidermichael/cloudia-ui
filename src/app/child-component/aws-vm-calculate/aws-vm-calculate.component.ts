import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-aws-vm-calculate',
  templateUrl: './aws-vm-calculate.component.html'
})
export class AwsVmCalculateComponent {

  @Input() priceInDollar = 0;
  @Input() sizeInGigabyte = 0;

  constructor() {
    //This is empty
  }

}
