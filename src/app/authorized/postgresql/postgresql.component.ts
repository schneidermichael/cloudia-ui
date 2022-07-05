import { Component } from '@angular/core';

@Component({
  selector: 'app-postgresql',
  templateUrl: './postgresql.component.html'
})

export class PostgresqlComponent {

  selectedProviderA : string | undefined;
  selectedProviderB : string | undefined;

  optionsProviderA = [
    { name: "AWS", value: 1 },
    { name: "GCP", value: 2 },
    { name: "Azure", value: 3 }
  ]

  optionsProviderB = [
    { name: "AWS", value: 1 },
    { name: "GCP", value: 2 },
    { name: "Azure", value: 3 }
  ]

  constructor() {
    // This is intentional
  }

}
