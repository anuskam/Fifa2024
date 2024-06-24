import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { IPlayer } from '../../interfaces/IPlayer.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-players-video',
  templateUrl: './players-video.component.html',
  styleUrl: './players-video.component.scss',
})
export class PlayersVideoComponent implements OnInit {
  player: IPlayer | undefined;
  videos: string[] = [];
  items: MenuItem[] = [];
  errorMessage: string | undefined;
  private route = inject(ActivatedRoute);
  private playersService = inject(PlayersService);

  ngOnInit(): void {
    this.loadPlayerVideos();
  }

  private loadPlayerVideos(): void {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(playerId)) {
      this.playersService.getPlayerById(playerId).subscribe({
        next: (player: IPlayer | undefined) => {
          this.player = player;
          this.videos = player ? player.videos : [];
          this.setBreadcrumb(playerId, player);
        },
        error: (error: unknown) => this.handleError(error),
      });
    } else {
      this.handleError(new Error('Invalid player ID'));
    }
  }

  private setBreadcrumb(playerId: number, player: IPlayer | undefined): void {
    if (player) {
      this.items = [
        { label: '', icon: 'pi pi-home', routerLink: ['/players'] },
        {
          label: `Player ${player.name}`,
          routerLink: [`/players/${playerId}`],
        },
        { label: 'Videos', routerLink: [`/players/${playerId}/videos`] },
      ];
    }
  }

  private handleError(error: unknown): void {
    console.error('An error occurred:', error);
    this.errorMessage = 'Failed to load player videos. Please try again later.';
  }
}
