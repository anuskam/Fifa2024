import { Component, OnInit, inject } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { IPlayer } from '../../interfaces/IPlayer.interface';
import { MenuItem } from 'primeng/api';
import { environment } from '../../../environments/environment';
import { EncryptionService } from '../../services/encryption.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
  players: IPlayer[] = [];
  items: MenuItem[] = [];
  decryptedImgNotFound: string;
  loadingStates: { [key: string]: boolean } = {};
  errorStates: { [key: string]: boolean } = {};
  private playersService = inject(PlayersService);
  private encryptionService = inject(EncryptionService);
  
  constructor() {
    this.decryptedImgNotFound = this.encryptionService.decrypt(environment.imgNotFound);
  }

  ngOnInit(): void {
    this.loadPlayers();
    this.items = [{ label: '', icon: 'pi pi-home', routerLink: ['/players'] }];
  }

  private loadPlayers(): void {
    this.playersService.getPlayers().subscribe((players: IPlayer[]) => {
      this.players = players;
      players.forEach(player => {
        this.loadingStates[player.photo] = true;
        this.errorStates[player.photo] = false;
        this.initiateLoadingTimeout(player.photo);
      });
    });
  }

  private initiateLoadingTimeout(photoUrl: string): void {
    setTimeout(() => {
      if (this.loadingStates[photoUrl]) {
        this.loadingStates[photoUrl] = false;
      }
    }, 1000);
  }

  onLoad(photoUrl: string): void {
    this.loadingStates[photoUrl] = false;
  }

  onError(photoUrl: string): void {
    this.loadingStates[photoUrl] = false;
    this.errorStates[photoUrl] = true;
  }
}
