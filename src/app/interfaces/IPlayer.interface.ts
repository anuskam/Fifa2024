import { IStat } from './IStat.interface';

export interface IPlayer {
  id: number;
  name: string;
  lastname: string;
  team: string;
  nationality: string;
  league: string;
  photo: string;
  photo_card: string;
  videos: string[];
  stats: IStat;
}
