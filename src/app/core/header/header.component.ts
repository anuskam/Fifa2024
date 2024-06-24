import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public languages = [
    { value: 'en', label: 'English', icon: '../assets/flagIcons/en-flag.png' },
    { value: 'es', label: 'Spanish', icon: '../assets/flagIcons/es-flag.png' },
    { value: 'ca', label: 'Catalan', icon: '../assets/flagIcons/ca-flag.png' },
  ];

  private translateService = inject(TranslateService);

  getLanguage(language: string) {
    this.translateService.use(language);
  }
}
