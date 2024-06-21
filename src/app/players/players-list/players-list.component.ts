import { Component, OnInit, inject } from '@angular/core';
import { PlayersService } from '../../services/players.service';  // Asegúrate de ajustar la ruta según la ubicación real del servicio
import { IPlayer } from '../../interfaces/IPlayer.interface';  // Ajusta la ruta según corresponda

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  photos: string[] = [];
  private playersService = inject(PlayersService);  // Asegúrate de ajustar la ruta según la ubicación real del servicio

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players: IPlayer[]) => {
      this.photos = players.map(player => player.photo);
    });
  }
}
