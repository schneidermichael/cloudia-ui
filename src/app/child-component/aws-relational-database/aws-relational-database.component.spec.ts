import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsRelationalDatabaseComponent } from './aws-relational-database.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('AwsRelationalDatabaseComponent', () => {
  let component: AwsRelationalDatabaseComponent;
  let fixture: ComponentFixture<AwsRelationalDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,ReactiveFormsModule, FormsModule,],
      declarations: [ AwsRelationalDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsRelationalDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
