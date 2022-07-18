import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AzurePostgresqlCalculateComponent} from "./azure-postgresql-calculate.component";

describe('AzurePostgresqlComponent', () => {
  let component: AzurePostgresqlCalculateComponent;
  let fixture: ComponentFixture<AzurePostgresqlCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, ReactiveFormsModule, FormsModule,],
      declarations: [ AzurePostgresqlCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzurePostgresqlCalculateComponent);
    component = fixture.componentInstance;
    component.information = { "core": 4, "ram": 4};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
