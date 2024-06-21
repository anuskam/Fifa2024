import { IStat } from './IStat.interface';

export interface IPlayer {
  name: string;
  lastname: string;
  team: string;
  nationality: string;
  league: string;
  photo: string;
  photo_card: string;
  stats: IStat;
}
