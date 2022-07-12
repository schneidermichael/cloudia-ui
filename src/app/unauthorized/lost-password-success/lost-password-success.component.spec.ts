import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPasswordSuccessComponent } from './lost-password-success.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('LostPasswordSuccessComponent', () => {
  let component: LostPasswordSuccessComponent;
  let fixture: ComponentFixture<LostPasswordSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      declarations: [ LostPasswordSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostPasswordSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
