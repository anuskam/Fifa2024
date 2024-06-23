import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// i18n
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from '../core/config/i18n/translate-loader.config';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersCardComponent } from './players-card/players-card.component';
import { PlayersVideoComponent } from './players-video/players-video.component';
import { SafeUrlPipe } from '../utils/pipes/safe-url.pipe';
import { PlayersService } from '../services/players.service';
import { PlayersPublicService } from '../services/players-public.service';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    PlayersListComponent,
    PlayersCardComponent,
    PlayersVideoComponent,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    TranslateModule,
    HttpClientModule,
    BreadcrumbModule,
  ],
  providers: [
    { provide: PlayersService, useClass: PlayersPublicService },
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
  ],
})
export class PlayersModule {}
