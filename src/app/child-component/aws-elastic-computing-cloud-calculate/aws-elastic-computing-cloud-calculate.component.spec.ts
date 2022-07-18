import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AwsElasticComputingCloudCalculateComponent} from "./aws-elastic-computing-cloud-calculate.component";

describe('ElasticComputingCloudComponent', () => {
  let component: AwsElasticComputingCloudCalculateComponent;
  let fixture: ComponentFixture<AwsElasticComputingCloudCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, FormsModule, HttpClientTestingModule, ],
      declarations: [ AwsElasticComputingCloudCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsElasticComputingCloudCalculateComponent);
    component = fixture.componentInstance;
    component.information = 4;
    component.priceInDollar = 80.0;
    component.sizeInGigabyte = 8;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
