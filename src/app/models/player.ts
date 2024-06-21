import { IPlayer } from '../interfaces/IPlayer.interface';
import { IStat } from '../interfaces/IStat.interface';

export class Player implements IPlayer {
  name: string;
  lastname: string;
  team: string;
  nationality: string;
  league: string;
  photo: string;
  photo_card: string;
  stats: IStat;

  constructor(player: IPlayer, stats: IStat) {
    this.name = player.name;
    this.lastname = player.lastname;
    this.team = player.team;
    this.nationality = player.nationality;
    this.league = player.league;
    this.photo = player.photo;
    this.photo_card = player.photo_card;
    this.stats = stats;
  }
}
