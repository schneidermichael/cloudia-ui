import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureVirtualMachineComponent } from './azure-virtual-machine.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {HomeComponent} from "../../authorized/home/home.component";

describe('AzureVirtualMachineComponent', () => {
  let component: AzureVirtualMachineComponent;
  let fixture: ComponentFixture<AzureVirtualMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, FormsModule, HttpClientTestingModule, ],
      declarations: [ AzureVirtualMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureVirtualMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
