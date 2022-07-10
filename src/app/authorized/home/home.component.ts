import { Component } from '@angular/core';
import {HistoryService} from "../../shared/service/history.service";
import {CreateHistoryRequest} from "../../shared/interface/create-history";
import {AuthenticationService} from "../../shared/service/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {


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

  awsPrice = 0;
  awsSize  = 0;

  gcpPrice = 0;
  gcpSize  = 0;

  azurePrice = 0;
  azureSize  = 0;

  constructor(private authenticationService: AuthenticationService, private historyService : HistoryService) {}

  changePriceAws(price: number) {
    this.awsPrice = price;
  }

  changeSizeAws(size: number) {
    this.awsSize = size;
  }

  changePriceGcp(price: number) {
    this.gcpPrice = price;
  }

  changeSizeGcp(size: number) {
    this.gcpSize = size;
  }

  changePriceAzure(price: number) {
    this.azurePrice = price;
  }

  changeSizeAzure(size: number) {
    this.azureSize = size;
  }

  createHistory() {
    this.request.userId = this.authenticationService.getUserId();
    this.request.type = "Virtual Machine"
    if (this.selectedProviderA != null) {
      this.request.providerA = this.selectedProviderA;
    }
    if (this.selectedProviderB != null) {
      this.request.providerB = this.selectedProviderB;
    }
    if (this.selectedProviderA == "AWS"){
      this.request.priceA = this.awsPrice;
    }else if (this.selectedProviderA == "GCP"){
      this.request.priceA = this.gcpPrice;
    }else{
      this.request.priceA = this.azurePrice;
    }

    if (this.selectedProviderB == "AWS"){
      this.request.priceB = this.awsPrice;
    }else if (this.selectedProviderB == "GCP"){
      this.request.priceB = this.gcpPrice;
    }else{
      this.request.priceB = this.azurePrice;
    }

    this.historyService.create(this.request).subscribe(value => console.log(value));
  }

}
