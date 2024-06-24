import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { IPlayer } from '../../interfaces/IPlayer.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrl: './players-card.component.scss',
})
export class PlayersCardComponent implements OnInit {
  player: IPlayer | undefined;
  errorMessage: string | undefined;
  items: MenuItem[] = [];
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
      next: (player: IPlayer | undefined) => {
        this.player = player;
        this.setBreadcrumb(player);
      },
      error: (error: unknown) => this.handleError(error),
    });
  }

  setBreadcrumb(player: IPlayer | undefined): void {
    if (player) {
      this.items = [
        { label: '', icon: 'pi pi-home', routerLink: ['/players'] },
        {
          label: `Player ${player.name}`,
          routerLink: [`/players/${player.id}`],
        },
      ];
    }
  }

  private handleError(error: unknown): void {
    console.error('An error occurred:', error);
    this.errorMessage =
      'Failed to load player details. Please try again later.';
  }
}
