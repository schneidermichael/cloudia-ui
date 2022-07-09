import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsElasticComputingCloudComponent } from './aws-elastic-computing-cloud.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ElasticComputingCloudComponent', () => {
  let component: AwsElasticComputingCloudComponent;
  let fixture: ComponentFixture<AwsElasticComputingCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, FormsModule, HttpClientTestingModule, ],
      declarations: [ AwsElasticComputingCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsElasticComputingCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
