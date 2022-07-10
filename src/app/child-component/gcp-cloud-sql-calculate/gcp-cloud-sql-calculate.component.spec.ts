import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpCloudSqlCalculateComponent } from './gcp-cloud-sql-calculate.component';

describe('GcpPostgresqlCalculateComponent', () => {
  let component: GcpCloudSqlCalculateComponent;
  let fixture: ComponentFixture<GcpCloudSqlCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpCloudSqlCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpCloudSqlCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
