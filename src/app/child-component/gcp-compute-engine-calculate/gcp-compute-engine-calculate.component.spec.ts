import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpComputeEngineCalculateComponent } from './gcp-compute-engine-calculate.component';

describe('GcpVmCalculateComponent', () => {
  let component: GcpComputeEngineCalculateComponent;
  let fixture: ComponentFixture<GcpComputeEngineCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpComputeEngineCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpComputeEngineCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
