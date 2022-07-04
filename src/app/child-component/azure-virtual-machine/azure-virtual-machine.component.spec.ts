import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureVirtualMachineComponent } from './azure-virtual-machine.component';

describe('AzureVirtualMachineComponent', () => {
  let component: AzureVirtualMachineComponent;
  let fixture: ComponentFixture<AzureVirtualMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
