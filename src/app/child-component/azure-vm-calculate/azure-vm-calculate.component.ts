import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-azure-vm-calculate',
  templateUrl: './azure-vm-calculate.component.html'
})
export class AzureVmCalculateComponent  {

  @Input() priceInDollar = 0;
  @Input() sizeInGigabyte = 0;

  constructor() {
    //This is empty
  }

}
