import { Component } from '@angular/core';
import {REGIONS, SIZES} from "../../shared/mock/mock-gcp";

@Component({
  selector: 'app-aws-relational-database-service',
  templateUrl: './aws-relational-database.component.html'
})

export class AwsRelationalDatabaseComponent {

  selectedSize : number | undefined;

  regions = REGIONS;
  sizes = SIZES;

  constructor() {
    //This is empty
  }

}
