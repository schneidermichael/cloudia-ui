import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresqlComponent } from './postgresql.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('PostgresqlComponent', () => {
  let component: PostgresqlComponent;
  let fixture: ComponentFixture<PostgresqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PostgresqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostgresqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
