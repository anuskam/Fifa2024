import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { IPlayer } from '../../interfaces/IPlayer.interface';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrls: ['./players-card.component.scss'],
})
export class PlayersCardComponent implements OnInit {
  player: IPlayer | undefined;
  errorMessage: string | undefined;
  private route = inject(ActivatedRoute);
  private playersService = inject(PlayersService);


  ngOnInit(): void {
    this.loadPlayerDetails();
  }

  loadPlayerDetails(): void {
    const playerId = this.route.snapshot.paramMap.get('id');
    if (playerId) {
      this.getPlayerDetails(+playerId); // Convert playerId to number
    }
  }

  getPlayerDetails(id: number): void {
    this.playersService.getPlayerById(id).subscribe({
      next: (player: IPlayer | undefined) => this.player = player,
      error: (error: any) => this.handleError(error)
    });
  }

  private handleError(error: any): void {
    console.error('An error occurred:', error);
    this.errorMessage = 'Failed to load player details. Please try again later.';
  }
}
