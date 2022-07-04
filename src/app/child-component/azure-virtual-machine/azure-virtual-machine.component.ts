import { Component } from '@angular/core';
import {REGIONS, SIZES} from "../../shared/mock/mock-gcp";

@Component({
  selector: 'app-azure-virtual-machine',
  templateUrl: './azure-virtual-machine.component.html'
})
export class AzureVirtualMachineComponent{

  regions = REGIONS;
  sizes = SIZES;

  constructor() {
    //This is empty
  }

}
