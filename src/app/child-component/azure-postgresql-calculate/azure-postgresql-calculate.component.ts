import { Component } from '@angular/core';
import {Serie} from "../../shared/interface/gcp-series";

@Component({
  selector: 'app-azure-postgresql-calculate',
  templateUrl: './azure-postgresql-calculate.component.html'
})
export class AzurePostgresqlCalculateComponent {

  selectedMachineType : Serie | undefined;
  selectedSize : number | undefined;

  constructor() {
    //This is empty
  }


}
