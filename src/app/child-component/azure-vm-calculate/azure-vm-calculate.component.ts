import { Component } from '@angular/core';
import {Serie} from "../../shared/interface/gcp-series";

@Component({
  selector: 'app-azure-vm-calculate',
  templateUrl: './azure-vm-calculate.component.html'
})
export class AzureVmCalculateComponent  {

  selectedMachineType : Serie | undefined;
  selectedSize : number | undefined;

  constructor() {
    //This is empty
  }

}
