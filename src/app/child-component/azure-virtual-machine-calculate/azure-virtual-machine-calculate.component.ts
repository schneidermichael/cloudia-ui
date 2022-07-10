import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-azure-virtual-machine-calculate',
  templateUrl: './azure-virtual-machine-calculate.component.html'
})
export class AzureVirtualMachineCalculateComponent {

  @Input() priceInDollar = 0;
  @Input() sizeInGigabyte = 0;

  constructor() {
    //This is empty
  }

}
