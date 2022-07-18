import { ComponentFixture, TestBed } from '@angular/core/testing';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AzureVirtualMachineCalculateComponent} from "./azure-virtual-machine-calculate.component";

describe('AzureVirtualMachineCalculateComponent', () => {
  let component: AzureVirtualMachineCalculateComponent;
  let fixture: ComponentFixture<AzureVirtualMachineCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, FormsModule, HttpClientTestingModule, ],
      declarations: [ AzureVirtualMachineCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureVirtualMachineCalculateComponent);
    component = fixture.componentInstance;
    component.information = { "core": 4, "ram": 4};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
