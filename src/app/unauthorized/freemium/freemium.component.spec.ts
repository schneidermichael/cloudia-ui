import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreemiumComponent } from './freemium.component';
import {GcpCloudSqlComponent} from "../../child-component/gcp-cloud-sql/gcp-cloud-sql.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {
  AwsRelationalDatabaseComponent
} from "../../child-component/aws-relational-database/aws-relational-database.component";
import {AzurePostgresqlComponent} from "../../child-component/azure-postgresql/azure-postgresql.component";
import {GcpComputeEngineComponent} from "../../child-component/gcp-compute-engine/gcp-compute-engine.component";
import {
  AwsElasticComputingCloudComponent
} from "../../child-component/aws-elastic-computing-cloud/aws-elastic-computing-cloud.component";
import {
  AzureVirtualMachineComponent
} from "../../child-component/azure-virtual-machine/azure-virtual-machine.component";

describe('FreemiumComponent', () => {
  let component: FreemiumComponent;
  let fixture: ComponentFixture<FreemiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule ],
      declarations: [
        FreemiumComponent,
        GcpCloudSqlComponent,
        AwsRelationalDatabaseComponent,
        AzurePostgresqlComponent,
        GcpComputeEngineComponent,
      AwsElasticComputingCloudComponent,
      AzureVirtualMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreemiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
