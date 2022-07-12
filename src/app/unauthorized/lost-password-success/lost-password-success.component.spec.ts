import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPasswordSuccessComponent } from './lost-password-success.component';

describe('LostPasswordSuccessComponent', () => {
  let component: LostPasswordSuccessComponent;
  let fixture: ComponentFixture<LostPasswordSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
