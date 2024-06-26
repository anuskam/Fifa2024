import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { IPlayer } from '../../interfaces/IPlayer.interface';
import { MenuItem } from 'primeng/api';
import { environment } from '../../../environments/environment';
import { EncryptionService } from '../../services/encryption.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrl: './players-card.component.scss',
})
export class PlayersCardComponent implements OnInit {
  player: IPlayer | undefined;
  errorMessage: string | undefined;
  items: MenuItem[] = [];
  loadingState: boolean = true;
  errorState: boolean = false;
  decryptedImgNotFound: string;
  env = environment;
  private route = inject(ActivatedRoute);
  private playersService = inject(PlayersService);
  private encryptionService = inject(EncryptionService);
  private translate = inject(TranslateService);

  constructor() {
    this.decryptedImgNotFound = this.encryptionService.decrypt(
      this.env.imgNotFound,
    );
  }
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
        this.startLoading(); // Iniciar el estado de carga
      },
      error: (error: unknown) => this.handleError(error),
    });
  }

  startLoading(): void {
    this.loadingState = true;
    this.errorState = false;
    // Temporizador para cambiar el estado de carga después de 1 segundo
    setTimeout(() => {
      this.loadingState = false;
    }, 1000);
  }

  onLoad(): void {
    this.loadingState = false;
  }

  onError(): void {
    this.loadingState = false;
    this.errorState = true;
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
    this.translate
      .get('error.error_occurred')
      .subscribe((translatedMessage: string) => {
        console.error(translatedMessage, error);
      });
    /* console.error('An error occurred:', error); */
    this.translate
      .get('error.failed_player')
      .subscribe((translatedMessage: string) => {
        this.errorMessage = translatedMessage;
      });
    /* this.errorMessage =
      'Failed to load player details. Please try again later.'; */
  }
}
