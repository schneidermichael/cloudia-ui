import { Component } from '@angular/core';
import {Serie} from "../../shared/interface/gcp-series";
import {MACHINES, OPERATINGSYSTEMS, REGIONS, SERIES, SIZES, ZONES} from "../../shared/mock/mock-gcp";

@Component({
  selector: 'app-gcp-compute-engine',
  templateUrl: './gcp-compute-engine.component.html'
})

export class GcpComputeEngineComponent {

  selectedMachineType : Serie | undefined;
  selectedSize : number | undefined;

  regions = REGIONS;
  zones = ZONES;
  series = SERIES;
  machines = MACHINES;
  operatingsystems = OPERATINGSYSTEMS;
  sizes = SIZES;

  constructor() {
    //This is empty
  }


}
