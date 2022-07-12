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
  selectedProviderA = "GCP";
  selectedProviderB = "Azure";

  optionsProvider = [
    { name: "AWS"},
    { name: "GCP" },
    { name: "Azure" }
  ]


  awsPricePerHour = 0;
  awsPricePerGb = 0
  awsSize  = 0;
  awsInformation = 0;


  azurePricePerHour = 0;
  azurePricePerGb = 0
  azureSize  = 0;
  azureInformation = 0;

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
    this.awsInformation = instance;
  }

  changeSizeAws(size: number) {
    this.awsSize = size;
  }

  changeInstanceAzure(instance: any) {
    this.azurePricePerHour = instance.price_per_hour;
    this.azurePricePerGb = instance.price_per_gib;
    this.azureInformation = instance;
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
    this.request.userId = this.authenticationService.getUserId();
    this.request.type = "PostgreSQL"
    if (this.selectedProviderA != null) {
      this.request.providerA = this.selectedProviderA;
    }
    if (this.selectedProviderB != null) {
      this.request.providerB = this.selectedProviderB;
    }
    if (this.selectedProviderA == "AWS") {
      this.request.priceA = this.awsPricePerHour * 730 + this.awsSize * this.awsPricePerGb;
    } else if (this.selectedProviderA == "GCP") {
      this.request.priceA = this.gcpSizePerCpu * this.gcpPricePerCpu * 730 + this.gcpSizePerRam * this.gcpPricePerRam * 730 + this.gcpSize * this.gcpPricePerGb;
    } else {
      this.request.priceA = this.azurePricePerHour * 730 + this.azureSize * this.azurePricePerGb;
    }

    if (this.selectedProviderB == "AWS") {
      this.request.priceB = this.awsPricePerHour * 730 + this.awsSize * this.awsPricePerGb;
    } else if (this.selectedProviderB == "GCP") {
      this.request.priceB = this.gcpSizePerCpu * this.gcpPricePerCpu * 730 + this.gcpSizePerRam * this.gcpPricePerRam * 730 + this.gcpSize * this.gcpPricePerGb;;
    } else {
      this.request.priceB = this.azurePricePerHour * 730 + this.azureSize * this.azurePricePerGb;
    }

    this.historyService.create(this.request).subscribe(value => console.log(value));
  }
}
