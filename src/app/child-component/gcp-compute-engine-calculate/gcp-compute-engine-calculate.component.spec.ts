import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GcpComputeEngineCalculateComponent} from "./gcp-compute-engine-calculate.component";

describe('GcpComputeEngineCalculateComponent', () => {
  let component: GcpComputeEngineCalculateComponent;
  let fixture: ComponentFixture<GcpComputeEngineCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,ReactiveFormsModule, FormsModule,],
      declarations: [ GcpComputeEngineCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpComputeEngineCalculateComponent);
    component = fixture.componentInstance;
    component.information = { "core": 4, "ram": 4};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
