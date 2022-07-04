import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureVmCalculateComponent } from './azure-vm-calculate.component';

describe('AzureVmCalculateComponent', () => {
  let component: AzureVmCalculateComponent;
  let fixture: ComponentFixture<AzureVmCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureVmCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureVmCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
