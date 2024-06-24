import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersCardComponent } from './players-card/players-card.component';
import { PlayersVideoComponent } from './players-video/players-video.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersListComponent,
  },
  {
    path: ':id',
    component: PlayersCardComponent,
  },
  {
    path: ':id/videos',
    component: PlayersVideoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
