import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersCardComponent } from './players-card/players-card.component';
import { PlayersVideoComponent } from './players-video/players-video.component';
import { SafeUrlPipe } from '../utils/pipes/safe-url.pipe';  

@NgModule({
  declarations: [
    PlayersListComponent,
    PlayersCardComponent,
    PlayersVideoComponent,
    SafeUrlPipe
  ],
  imports: [CommonModule, PlayersRoutingModule],
})
export class PlayersModule {}
