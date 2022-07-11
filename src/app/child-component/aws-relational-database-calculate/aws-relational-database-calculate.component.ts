import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-aws-relational-database-calculate',
  templateUrl: './aws-relational-database-calculate.component.html'
})
export class AwsRelationalDatabaseCalculateComponent {

  @Input() pricePerHour = 0;
  @Input() pricePerGb = 0;
  @Input() size = 0;
  @Input() information : any;

  constructor() {
    //This is empty
  }

}
