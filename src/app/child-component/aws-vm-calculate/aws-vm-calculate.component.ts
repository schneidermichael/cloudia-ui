import { Component } from '@angular/core';
import {Serie} from "../../shared/interface/gcp-series";

@Component({
  selector: 'app-aws-vm-calculate',
  templateUrl: './aws-vm-calculate.component.html'
})
export class AwsVmCalculateComponent {

  selectedMachineType : Serie | undefined;
  selectedSize : number | undefined;

  constructor() {
    //This is empty
  }


}
