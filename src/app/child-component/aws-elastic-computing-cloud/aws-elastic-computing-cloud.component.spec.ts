import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsElasticComputingCloudComponent } from './aws-elastic-computing-cloud.component';

describe('ElasticComputingCloudComponent', () => {
  let component: AwsElasticComputingCloudComponent;
  let fixture: ComponentFixture<AwsElasticComputingCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsElasticComputingCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsElasticComputingCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
