import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// i18n
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './config/i18n/translate-loader.config';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, Error404Component],
  imports: [CommonModule, TranslateModule, HttpClientModule],
  providers: [
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
