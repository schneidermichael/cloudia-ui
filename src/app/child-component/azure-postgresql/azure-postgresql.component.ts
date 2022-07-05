import { Component } from '@angular/core';
import {REGIONS, SIZES} from "../../shared/mock/mock-gcp";

@Component({
  selector: 'app-azure-postgresql',
  templateUrl: './azure-postgresql.component.html'

})
export class AzurePostgresqlComponent {

  selectedSize : number | undefined;

  regions = REGIONS;
  sizes = SIZES;

  constructor() {
    //This is empty
  }

}
