import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { IPlayer } from '../../interfaces/IPlayer.interface';

@Component({
  selector: 'app-players-video',
  templateUrl: './players-video.component.html',
  styleUrls: ['./players-video.component.scss']
})
export class PlayersVideoComponent implements OnInit {
  player: IPlayer | undefined;
  videos: string[] = [];
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) {}

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
        },
        error: (error: any) => this.handleError(error)
      });
    } else {
      this.handleError(new Error('Invalid player ID'));
    }
  }

  private handleError(error: any): void {
    console.error('An error occurred:', error);
    this.errorMessage = 'Failed to load player videos. Please try again later.';
  }
}
