import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './core/error404/error404.component';

const routes: Routes = [
  {
    path: 'players',
    loadChildren: () =>
      import('./players/players.module').then(module => module.PlayersModule),
  },
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
