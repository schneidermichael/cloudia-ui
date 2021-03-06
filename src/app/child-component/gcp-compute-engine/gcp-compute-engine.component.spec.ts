import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpComputeEngineComponent } from './gcp-compute-engine.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ComputeEngineComponent', () => {
  let component: GcpComputeEngineComponent;
  let fixture: ComponentFixture<GcpComputeEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,ReactiveFormsModule, FormsModule,],
      declarations: [ GcpComputeEngineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpComputeEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
