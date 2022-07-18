import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GcpCloudSqlCalculateComponent} from "./gcp-cloud-sql-calculate.component";

describe('GcpCloudSqlCalculateComponent', () => {
  let component: GcpCloudSqlCalculateComponent;
  let fixture: ComponentFixture<GcpCloudSqlCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, ReactiveFormsModule, FormsModule,],
      declarations: [ GcpCloudSqlCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpCloudSqlCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
