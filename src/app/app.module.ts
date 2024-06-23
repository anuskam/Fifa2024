import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
// i18n
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';
import { Error404Component } from './core/error404/error404.component';

/* import { MultiLanguageComponent } from './components/multi-language/multi-language.component'; */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    Error404Component
  ],
  imports: [BrowserModule, AppRoutingModule, TranslateModule, HttpClientModule],
  providers: [
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
