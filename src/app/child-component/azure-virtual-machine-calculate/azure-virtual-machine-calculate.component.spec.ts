import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureVirtualMachineCalculateComponent } from './azure-virtual-machine-calculate.component';

describe('AzureVmCalculateComponent', () => {
  let component: AzureVirtualMachineCalculateComponent;
  let fixture: ComponentFixture<AzureVirtualMachineCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureVirtualMachineCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureVirtualMachineCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
