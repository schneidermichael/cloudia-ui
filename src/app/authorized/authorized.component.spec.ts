import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthorizedComponent } from './authorized.component';

describe('AuthorizedComponent', () => {
  let component: AuthorizedComponent;
  let fixture: ComponentFixture<AuthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({      imports: [    
      RouterTestingModule    
    ],
      declarations: [ AuthorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
