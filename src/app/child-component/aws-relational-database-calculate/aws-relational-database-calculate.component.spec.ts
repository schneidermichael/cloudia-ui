import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsRelationalDatabaseCalculateComponent } from './aws-relational-database-calculate.component';

describe('AwsPostgresqlCalculateComponent', () => {
  let component: AwsRelationalDatabaseCalculateComponent;
  let fixture: ComponentFixture<AwsRelationalDatabaseCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsRelationalDatabaseCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsRelationalDatabaseCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
