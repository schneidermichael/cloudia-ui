import {Component} from '@angular/core';
import {HistoryService} from "../../shared/service/history.service";
import {CreateHistoryRequest} from "../../shared/interface/create-history";
import {AuthenticationService} from "../../shared/service/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {


  showError = false;

  request = {} as CreateHistoryRequest;
  selectedProviderA = "AWS";
  selectedProviderB = "GCP";

  optionsProvider = [
    {name: "AWS"},
    {name: "GCP"},
    {name: "Azure"}
  ];

  awsPrice = 0;
  awsInformation = 0;
  awsSize = 0;

  gcpPrice = 0;
  gcpInformation = 0;
  gcpSize = 0;

  azurePrice = 0;
  azureInformation = 0;
  azureSize = 0;

  constructor(private authenticationService: AuthenticationService, private historyService: HistoryService) {
  }

  changePriceAws(instance: any) {
    this.awsPrice = instance.price_per_hour;
    this.awsInformation = instance;
  }

  changeSizeAws(size: number) {
    this.awsSize = size;
  }

  changePriceGcp(instance: any) {
    this.gcpPrice = instance.price_per_hour;
    this.gcpInformation = instance;
  }

  changeSizeGcp(size: number) {
    this.gcpSize = size;
  }

  changePriceAzure(instance: any) {
    this.azurePrice = instance.price_per_hour;
    this.azureInformation = instance;
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
    if (this.selectedProviderA == "AWS") {
      this.request.priceA = this.awsPrice * 730 + this.awsSize * 0.1;
    } else if (this.selectedProviderA == "GCP") {
      this.request.priceA = this.gcpPrice * 730 + this.gcpSize * 0.1;
    } else {
      this.request.priceA = this.azurePrice * 730 + this.azureSize * 0.1;
    }

    if (this.selectedProviderB == "AWS") {
      this.request.priceB = this.awsPrice * 730 + this.awsSize * 0.1;
    } else if (this.selectedProviderB == "GCP") {
      this.request.priceB = this.gcpPrice * 730 + this.gcpSize * 0.1;
    } else {
      this.request.priceB = this.azurePrice * 730 + this.azureSize * 0.1;
    }

    this.historyService.create(this.request).subscribe({
      next: (value) => {
        console.log(value);
        this.showError = false;
      },
      error: (e) => {
        if (e.status === 0){
          this.showError = true;

        }
        console.error(e)
      },
      complete: () => console.info('complete')
    });

  }
}
