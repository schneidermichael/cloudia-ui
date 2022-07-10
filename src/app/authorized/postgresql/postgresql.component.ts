import { Component } from '@angular/core';
import {CreateHistoryRequest} from "../../shared/interface/create-history";
import {AuthenticationService} from "../../shared/service/authentication.service";
import {HistoryService} from "../../shared/service/history.service";

@Component({
  selector: 'app-postgresql',
  templateUrl: './postgresql.component.html'
})

export class PostgresqlComponent {

  request = {} as CreateHistoryRequest;
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

  awsPricePerHour = 0;
  awsPricePerGb = 0
  awsSize  = 0;

  azurePricePerHour = 0;
  azurePricePerGb = 0
  azureSize  = 0;

  gcpPricePerCpu = 0;
  gcpPricePerRam  = 0;
  gcpPricePerGb = 0
  gcpSizePerCpu = 0;
  gcpSizePerRam = 0
  gcpSize  = 0;


  constructor(private authenticationService: AuthenticationService, private historyService : HistoryService) {}

  changeInstanceAws(instance: any) {
    this.awsPricePerHour = instance.price_per_hour;
    this.awsPricePerGb = instance.price_per_gib;
  }

  changeSizeAws(size: number) {
    this.awsSize = size;
  }

  changeInstanceAzure(instance: any) {
    this.azurePricePerHour = instance.price_per_hour;
    this.azurePricePerGb = instance.price_per_gib;
  }

  changeSizeAzure(size: number) {
    this.azureSize = size;
  }

  changeInstanceGcp(instance: any){
    this.gcpPricePerCpu = instance.price_per_cpu_hour;
    this.gcpPricePerRam  = instance.price_per_ram_hour;
    this.gcpPricePerGb = instance.price_per_gib;
  }

  changeSizeCpuGcp(size: number) {
    this.gcpSizePerCpu = size;
  }

  changeSizeRamGcp(size: number) {
    this.gcpSizePerRam = size;
  }

  changeSizeGcp(size: number) {
    this.gcpSize = size;
  }

  createHistory() {

  }
}
