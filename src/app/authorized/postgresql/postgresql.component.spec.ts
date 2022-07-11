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

describe('PostgresqlComponent', () => {
  let component: PostgresqlComponent;
  let fixture: ComponentFixture<PostgresqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PostgresqlComponent, AzurePostgresqlCalculateComponent, GcpCloudSqlCalculateComponent, AwsRelationalDatabaseCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostgresqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
