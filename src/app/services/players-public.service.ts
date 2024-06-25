import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IPlayer } from '../interfaces/IPlayer.interface';
import { PlayersService } from './players.service';
import { EncryptionService } from './encryption.service';

@Injectable()
export class PlayersPublicService implements PlayersService {
  decryptedApiUrl: string;
  private http = inject(HttpClient);
  private encryptionService = inject(EncryptionService);

  constructor() {
    this.decryptedApiUrl = this.encryptionService.decrypt(environment.apiUrl);
  }

  getPlayers(): Observable<IPlayer[]> {
    return this.http.get<{ players: IPlayer[] }>(this.decryptedApiUrl).pipe(
      map(response => response.players),
      catchError(this.handleError),
    );
  }

  getPlayerById(id: number): Observable<IPlayer | undefined> {
    return this.getPlayers().pipe(
      map((players: IPlayer[]) => players.find(player => player.id === id)),
      catchError(this.handleError),
    );
  }

  getPlayerVideos(id: number): Observable<string[]> {
    return this.getPlayerById(id).pipe(
      map(player => (player ? player.videos : [])),
      catchError(this.handleError),
    );
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(
      () => new Error('Something bad happened; please try again later.'),
    );
  }
}
