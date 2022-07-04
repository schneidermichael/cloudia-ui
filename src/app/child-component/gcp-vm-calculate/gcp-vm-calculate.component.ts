import { Component } from '@angular/core';
import {Serie} from "../../shared/interface/gcp-series";

@Component({
  selector: 'app-gcp-vm-calculate',
  templateUrl: './gcp-vm-calculate.component.html'
})
export class GcpVmCalculateComponent  {

  selectedMachineType : Serie | undefined;
  selectedSize : number | undefined;

  constructor() { }

}
