import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ResendRegistrationComponent } from './resend-registration.component';
import {LoginComponent} from "../login/login.component";
import {RegisterSuccessComponent} from "../register-success/register-success.component";

describe('ResendRegistrationComponent', () => {
  let component: ResendRegistrationComponent;
  let fixture: ComponentFixture<ResendRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'success', component: RegisterSuccessComponent}
      ])],
      declarations: [ ResendRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set instance correctly', () => {
    expect(component).not.toBeNull();
  });

  it('should resendRegistration', () => {
    component.resendConformation();
    expect().nothing();
  });

});
