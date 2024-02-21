import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroSearhComponent } from './hero-search/hero-search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable, map } from 'rxjs';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeroSearhComponent,RouterLink,MatIconModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Marvel';
  heroes$?: Observable<Hero[]>;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    
    this.heroes$ = this.heroService.getHeroes().pipe(
      map(heroes => heroes.slice(0, 8)),
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
