import { Component } from '@angular/core';
import {Serie} from "../../shared/interface/gcp-series";

@Component({
  selector: 'app-gcp-postgresql-calculate',
  templateUrl: './gcp-postgresql-calculate.component.html'
})
export class GcpPostgresqlCalculateComponent  {

  selectedMachineType : Serie | undefined;
  selectedSize : number | undefined;

  constructor() {
    //This is empty
  }

}
