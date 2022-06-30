import { Component } from '@angular/core';
import {MACHINES, OPERATINGSYSTEMS, REGIONS, SERIES, SIZES, ZONES} from "../../shared/mock/mock-gcp";
import {Serie} from "../../shared/interface/gcp-series";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  selectedMachineType : Serie | undefined;
  selectedSize : number | undefined;

  regions = REGIONS;
  zones = ZONES;
  series = SERIES;
  machines = MACHINES;
  operatingsystems = OPERATINGSYSTEMS;
  sizes = SIZES;

  constructor() { // This is intentional
     }


}
