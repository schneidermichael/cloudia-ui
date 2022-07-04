import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurePostgresqlCalculateComponent } from './azure-postgresql-calculate.component';

describe('AzurePostgresqlCalculateComponent', () => {
  let component: AzurePostgresqlCalculateComponent;
  let fixture: ComponentFixture<AzurePostgresqlCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzurePostgresqlCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzurePostgresqlCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
