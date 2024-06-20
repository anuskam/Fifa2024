import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersVideoComponent } from './players-video.component';

describe('PlayersVideoComponent', () => {
  let component: PlayersVideoComponent;
  let fixture: ComponentFixture<PlayersVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
