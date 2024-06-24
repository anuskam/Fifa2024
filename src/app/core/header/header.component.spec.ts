import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the FIFA logo', () => {
    const compiled = fixture.nativeElement;
    const imgElement = compiled.querySelector('.header__logo img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain('fifa-logo.png');
  });

  it('should render language buttons', () => {
    const compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll('.header__multilanguage-button');
    expect(buttons.length).toBe(component.languages.length);
  });

  it('should call getLanguage method when a language button is clicked', () => {
    spyOn(component, 'getLanguage');
    const button = fixture.debugElement.query(
      By.css('.header__multilanguage-button'),
    );
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.getLanguage).toHaveBeenCalledWith(
      component.languages[0].value,
    );
  });
});
