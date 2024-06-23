import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// i18n
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule,
    HttpClientModule,
    CoreModule,
    TranslateModule.forRoot(provideTranslation())
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
