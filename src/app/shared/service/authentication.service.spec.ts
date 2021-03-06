import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule , RouterTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', () => {
    service.login("","");
    expect().nothing();
  });

  it('should setToken', () => {
    service.setToken("");
    expect().nothing();
  });

  it('should getToken', () => {
    service.getToken();
    expect().nothing();
  });

  it('should register', () => {
    service.register("", "", "", "", "","");
    expect().nothing();
  });

  it('should lostPassword', () => {
    service.lostPassword("");
    expect().nothing();
  });

  it('should lostPassword', () => {
    service.resendConformation("","");
    expect().nothing();
  });

});
