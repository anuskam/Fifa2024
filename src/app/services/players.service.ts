import { Injectable } from '@angular/core';
import { IPlayer } from '../interfaces/IPlayer.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class PlayersService {
  abstract getPlayers(): Observable<IPlayer[]>;
  abstract getPlayerById(id: number): Observable<IPlayer | undefined>;
  abstract getPlayerVideos(id: number): Observable<string[]>;
  abstract handleError(error: HttpErrorResponse): Observable<never>;
}
