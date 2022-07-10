import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gcp-compute-engine-calculate',
  templateUrl: './gcp-compute-engine-calculate.component.html'
})
export class GcpComputeEngineCalculateComponent {

  @Input() priceInDollar = 0;
  @Input() sizeInGigabyte = 0;

  constructor() {
    //This is empty
  }

}
