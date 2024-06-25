import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the footer content', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.footer__person span').textContent,
    ).toContain('© Anna Moreta');
    expect(
      compiled
        .querySelectorAll('.footer__person')[0]
        .querySelector('.footer__vueling').textContent,
    ).toBe('Vueling University');
    expect(
      compiled
        .querySelectorAll('.footer__person')[1]
        .querySelector('.footer__vueling').textContent,
    ).toBe('Vueling University');
    expect(
      compiled.querySelectorAll('.footer__person span')[2].textContent,
    ).toContain('anna.moreta7@gmail.com');
    expect(
      compiled.querySelectorAll('.footer__person span')[5].textContent,
    ).toContain('pdefelitto@gmail.com');
  });
});
