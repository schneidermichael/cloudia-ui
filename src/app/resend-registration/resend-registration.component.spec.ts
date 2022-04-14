import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendRegistrationComponent } from './resend-registration.component';

describe('ResendRegistrationComponent', () => {
  let component: ResendRegistrationComponent;
  let fixture: ComponentFixture<ResendRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
