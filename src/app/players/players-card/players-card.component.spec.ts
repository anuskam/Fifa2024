import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersCardComponent } from './players-card.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersService } from '../../services/players.service';
import { BreadcrumbModule } from 'primeng/breadcrumb';

describe('PlayersCardComponent', () => {
  let component: PlayersCardComponent;
  let fixture: ComponentFixture<PlayersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersCardComponent],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        BreadcrumbModule,
      ],
      providers: [TranslateService, PlayersService],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
