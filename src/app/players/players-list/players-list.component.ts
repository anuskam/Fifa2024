import { Component, OnInit, inject } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { IPlayer } from '../../interfaces/IPlayer.interface';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  players: IPlayer[] = [];
  private playersService = inject(PlayersService);

  ngOnInit(): void {
    this.loadPlayers();
  }

  private loadPlayers(): void {
    this.playersService.getPlayers().subscribe((players: IPlayer[]) => {
      this.players = players;
    });
  }
}
