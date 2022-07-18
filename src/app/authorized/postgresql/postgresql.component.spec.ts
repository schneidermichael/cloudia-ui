import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresqlComponent } from './postgresql.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {
  AzurePostgresqlCalculateComponent
} from "../../child-component/azure-postgresql-calculate/azure-postgresql-calculate.component";
import {
  GcpCloudSqlCalculateComponent
} from "../../child-component/gcp-cloud-sql-calculate/gcp-cloud-sql-calculate.component";
import {
  AwsRelationalDatabaseCalculateComponent
} from "../../child-component/aws-relational-database-calculate/aws-relational-database-calculate.component";
import {AzurePostgresqlComponent} from "../../child-component/azure-postgresql/azure-postgresql.component";
import {GcpCloudSqlComponent} from "../../child-component/gcp-cloud-sql/gcp-cloud-sql.component";
import {
  AwsRelationalDatabaseComponent
} from "../../child-component/aws-relational-database/aws-relational-database.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('PostgresqlComponent', () => {
  let component: PostgresqlComponent;
  let fixture: ComponentFixture<PostgresqlComponent>;
  let instance = {"price_per_hour" : 0.098};
  let size = 5;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, FormsModule,],
      declarations: [ PostgresqlComponent,
        AzurePostgresqlCalculateComponent,
        GcpCloudSqlCalculateComponent,
        AwsRelationalDatabaseCalculateComponent,
        GcpCloudSqlComponent,
        AwsRelationalDatabaseComponent,
        AzurePostgresqlComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostgresqlComponent);
    component = fixture.componentInstance;
    component.changeInstanceAws(instance);
    component.changeInstanceAzure(instance);
    component.changeInstanceGcp(instance);
    component.changeSizeGcp(size);
    component.changeSizeAws(size);
    component.changeSizeAzure(size)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
