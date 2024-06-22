import { Observable } from 'rxjs';
import { IPlayer } from '../interfaces/IPlayer.interface';

export interface IPlayersService {
  getPlayers(): Observable<IPlayer[]>;
  getPlayerById(id: number): Observable<IPlayer | undefined>;
  getPlayerVideos(id: number): Observable<string[]>;
}
