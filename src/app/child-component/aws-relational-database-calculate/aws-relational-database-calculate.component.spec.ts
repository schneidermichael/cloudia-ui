import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AwsRelationalDatabaseCalculateComponent} from "./aws-relational-database-calculate.component";

describe('AwsRelationalDatabaseCalculateComponent', () => {
  let component: AwsRelationalDatabaseCalculateComponent;
  let fixture: ComponentFixture<AwsRelationalDatabaseCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,ReactiveFormsModule, FormsModule,],
      declarations: [ AwsRelationalDatabaseCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsRelationalDatabaseCalculateComponent);
    component = fixture.componentInstance;
    component.information = { "core": 4, "ram": 4};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
