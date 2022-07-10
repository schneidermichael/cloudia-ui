import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gcp-cloud-sql-calculate',
  templateUrl: './gcp-cloud-sql-calculate.component.html'
})
export class GcpCloudSqlCalculateComponent {

  @Input() pricePerCpu = 0;
  @Input() sizePerCpu = 0;

  @Input() pricePerRam  = 0;
  @Input() sizePerRam = 0

  @Input() pricePerGb = 0
  @Input() size = 0;

  constructor() {
    //This is empty
  }

}
