import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// i18n
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersCardComponent } from './players-card/players-card.component';
import { PlayersVideoComponent } from './players-video/players-video.component';
import { SafeUrlPipe } from '../utils/pipes/safe-url.pipe';
import { PlayersService } from '../services/players.service';
import { PlayersPublicService } from '../services/players-public.service';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { LoadImgComponent } from '../utils/components/load-img/load-img.component';

@NgModule({
  declarations: [
    PlayersListComponent,
    PlayersCardComponent,
    PlayersVideoComponent,
    SafeUrlPipe,
    LoadImgComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    TranslateModule,
    HttpClientModule,
    BreadcrumbModule,
  ],
  providers: [{ provide: PlayersService, useClass: PlayersPublicService }],
})
export class PlayersModule {}
