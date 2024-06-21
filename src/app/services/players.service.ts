import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlayer } from '../interfaces/IPlayer.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<IPlayer[]> {
    return this.http.get<{ players: IPlayer[] }>(this.playersUrl).pipe(
      map(response => response.players)
    );
  }
}
