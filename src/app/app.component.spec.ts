import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './unauthorized/footer/footer.component';
import { NavbarComponent } from './unauthorized/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FooterComponent,
        NavbarComponent
      ],
    }).compileComponents();
  });

  it(`should have as title 'cloudia-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cloudia-ui');
  });

});
