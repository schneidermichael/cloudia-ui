import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gcp-vm-calculate',
  templateUrl: './gcp-vm-calculate.component.html'
})
export class GcpVmCalculateComponent  {

  @Input() priceInDollar = 0;
  @Input() sizeInGigabyte = 0;

  constructor() {
    //This is empty
  }

}
