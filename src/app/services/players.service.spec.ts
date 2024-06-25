import { TestBed } from '@angular/core/testing';

import { PlayersService } from './players.service';
import { IPlayer } from '../interfaces/IPlayer.interface';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

class MockPlayersService extends PlayersService {
  players: IPlayer[] = [
    {
      id: 1,
      name: 'Fridolina',
      lastname: 'Rolfo',
      team: 'FC Barcelona',
      nationality: 'Sweden',
      league: 'Liga F',
      photo:
        'https://img.asmedia.epimg.net/resizer/v2/GTZKGT7ZLGRLJMTU4ZB3YDTIJA.JPG?auth=23100a7afa0390f3e19d854e41c561beb2b2815cf97a089c00d6bf3fc387dfdd&width=1200&height=1200&smart=true',
      photo_card: 'assets/images/fridolina_rolfo.png',
      stats: {
        pace: 82,
        shooting: 82,
        passing: 82,
        dribbling: 87,
        defending: 83,
        physical: 80,
      },
      videos: [
        'https://www.youtube.com/watch?v=YQ5yN30DZ8I',
        'https://www.youtube.com/watch?v=BBrkq_KkMSI',
        'https://www.youtube.com/watch?v=6Tc3CDu2gFg',
        'https://www.youtube.com/watch?v=eySAmuYAtg8',
      ],
    },
  ];
  getPlayers() {
    return of(this.players);
  }

  getPlayerById(id: number) {
    const player = this.players.find(p => p.id === id);
    return of(player);
  }

  getPlayerVideos(id: number) {
    const player = this.players.find(p => p.id === id);
    return of(player ? player.videos : []);
  }

  handleError() {
    return throwError('An error occurred');
  }
}

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PlayersService, useClass: MockPlayersService }],
    });
    service = TestBed.inject(PlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of players', (done: DoneFn) => {
    service.getPlayers().subscribe(players => {
      expect(players.length).toBeGreaterThan(0);
      expect(players[0].name).toBe('Fridolina');
      done();
    });
  });

  it('should return a player by id', (done: DoneFn) => {
    service.getPlayerById(1).subscribe(player => {
      expect(player).toBeTruthy();
      expect(player?.name).toBe('Fridolina');
      done();
    });
  });

  it('should return a list of player videos', (done: DoneFn) => {
    service.getPlayerVideos(1).subscribe(videos => {
      expect(videos.length).toBeGreaterThan(0);
      expect(videos).toContain('https://www.youtube.com/watch?v=YQ5yN30DZ8I');
      done();
    });
  });

  it('should handle errors', (done: DoneFn) => {
    service
      .handleError(new HttpErrorResponse({ error: 'Test Error' }))
      .subscribe({
        next: () => {},
        error: error => {
          expect(error).toBe('An error occurred');
          done();
        },
      });
  });
});
