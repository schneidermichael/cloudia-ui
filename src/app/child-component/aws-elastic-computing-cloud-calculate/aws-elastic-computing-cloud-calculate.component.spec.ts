import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsElasticComputingCloudCalculateComponent } from './aws-elastic-computing-cloud-calculate.component';

describe('AwsVmCalculateComponent', () => {
  let component: AwsElasticComputingCloudCalculateComponent;
  let fixture: ComponentFixture<AwsElasticComputingCloudCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsElasticComputingCloudCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsElasticComputingCloudCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
