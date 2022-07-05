import { Component } from '@angular/core';
import {Serie} from "../../shared/interface/gcp-series";

@Component({
  selector: 'app-aws-postgresql-calculate',
  templateUrl: './aws-postgresql-calculate.component.html'
})
export class AwsPostgresqlCalculateComponent  {

  selectedMachineType : Serie | undefined;
  selectedSize : number | undefined;

  constructor() {
    //This is empty
  }


}
