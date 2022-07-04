import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpCloudSqlComponent } from './gcp-cloud-sql.component';

describe('CloudSqlComponent', () => {
  let component: GcpCloudSqlComponent;
  let fixture: ComponentFixture<GcpCloudSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpCloudSqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpCloudSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
