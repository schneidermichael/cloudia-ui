import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpVmCalculateComponent } from './gcp-vm-calculate.component';

describe('GcpVmCalculateComponent', () => {
  let component: GcpVmCalculateComponent;
  let fixture: ComponentFixture<GcpVmCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpVmCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpVmCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
