import { Component } from '@angular/core';
import {REGIONS, SIZES} from "../../shared/mock/mock-gcp";

@Component({
  selector: 'app-gcp-cloud-sql',
  templateUrl: './gcp-cloud-sql.component.html'
})
export class GcpCloudSqlComponent {

  selectedSize : number | undefined;

  regions = REGIONS;
  sizes = SIZES;

  constructor() {
    //This is empty
  }

}
