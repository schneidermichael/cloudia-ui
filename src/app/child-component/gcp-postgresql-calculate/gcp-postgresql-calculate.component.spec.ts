import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpPostgresqlCalculateComponent } from './gcp-postgresql-calculate.component';

describe('GcpPostgresqlCalculateComponent', () => {
  let component: GcpPostgresqlCalculateComponent;
  let fixture: ComponentFixture<GcpPostgresqlCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpPostgresqlCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpPostgresqlCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
