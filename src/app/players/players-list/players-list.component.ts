import { Component, OnInit, inject } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { IPlayer } from '../../interfaces/IPlayer.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss',
})
export class PlayersListComponent implements OnInit {
  players: IPlayer[] = [];
  items: MenuItem[] = [];
  private playersService = inject(PlayersService);

  ngOnInit(): void {
    this.loadPlayers();
    this.items = [{ label: '', icon: 'pi pi-home', routerLink: ['/players'] }];
  }

  private loadPlayers(): void {
    this.playersService.getPlayers().subscribe((players: IPlayer[]) => {
      this.players = players;
    });
  }
}
