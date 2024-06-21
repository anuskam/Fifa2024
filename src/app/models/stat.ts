import { IStat } from '../interfaces/IStat.interface';

export class Stat implements IStat {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;

  constructor(stat: IStat) {
    this.pace = stat.pace;
    this.shooting = stat.shooting;
    this.passing = stat.passing;
    this.dribbling = stat.dribbling;
    this.defending = stat.defending;
    this.physical = stat.physical;
  }
}
