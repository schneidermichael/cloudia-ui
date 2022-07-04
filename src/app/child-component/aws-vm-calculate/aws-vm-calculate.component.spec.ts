import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsVmCalculateComponent } from './aws-vm-calculate.component';

describe('AwsVmCalculateComponent', () => {
  let component: AwsVmCalculateComponent;
  let fixture: ComponentFixture<AwsVmCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsVmCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsVmCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
