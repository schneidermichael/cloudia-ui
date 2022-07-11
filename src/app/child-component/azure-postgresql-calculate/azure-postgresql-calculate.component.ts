import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-azure-postgresql-calculate',
  templateUrl: './azure-postgresql-calculate.component.html'
})
export class AzurePostgresqlCalculateComponent {

  @Input() pricePerHour = 0;
  @Input() pricePerGb = 0;
  @Input() size = 0;
  @Input() information : any;

  constructor() {
    //This is empty
  }


}
