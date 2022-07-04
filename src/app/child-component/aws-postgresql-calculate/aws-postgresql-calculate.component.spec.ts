import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsPostgresqlCalculateComponent } from './aws-postgresql-calculate.component';

describe('AwsPostgresqlCalculateComponent', () => {
  let component: AwsPostgresqlCalculateComponent;
  let fixture: ComponentFixture<AwsPostgresqlCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsPostgresqlCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsPostgresqlCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
