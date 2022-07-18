import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {GcpComputeEngineComponent} from "../../child-component/gcp-compute-engine/gcp-compute-engine.component";
import {
  AwsElasticComputingCloudComponent
} from "../../child-component/aws-elastic-computing-cloud/aws-elastic-computing-cloud.component";
import {
  AzureVirtualMachineComponent
} from "../../child-component/azure-virtual-machine/azure-virtual-machine.component";
import {
  AzureVirtualMachineCalculateComponent
} from "../../child-component/azure-virtual-machine-calculate/azure-virtual-machine-calculate.component";
import {
  GcpComputeEngineCalculateComponent
} from "../../child-component/gcp-compute-engine-calculate/gcp-compute-engine-calculate.component";
import {
  AwsElasticComputingCloudCalculateComponent
} from "../../child-component/aws-elastic-computing-cloud-calculate/aws-elastic-computing-cloud-calculate.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let instance = {"price_per_hour" : 0.098};
  let size = 5;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule ],
      declarations: [ HomeComponent,
        GcpComputeEngineComponent,
        AwsElasticComputingCloudComponent,
        AzureVirtualMachineComponent,
      AzureVirtualMachineCalculateComponent,
        GcpComputeEngineCalculateComponent,
        AwsElasticComputingCloudCalculateComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.changePriceAws(instance);
    component.changePriceAzure(instance);
    component.changePriceGcp(instance);
    component.changeSizeGcp(size);
    component.changeSizeAws(size);
    component.changeSizeAzure(size)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
