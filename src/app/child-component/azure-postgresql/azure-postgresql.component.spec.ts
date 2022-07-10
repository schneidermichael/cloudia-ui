import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurePostgresqlComponent } from './azure-postgresql.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AzurePostgresqlComponent', () => {
  let component: AzurePostgresqlComponent;
  let fixture: ComponentFixture<AzurePostgresqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ AzurePostgresqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzurePostgresqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
