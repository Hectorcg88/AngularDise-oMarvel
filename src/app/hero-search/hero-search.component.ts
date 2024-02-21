import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, filter, of, switchMap } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [RouterLink,NgFor,AsyncPipe,ReactiveFormsModule,NgIf,MatFormFieldModule, MatInputModule,MatAutocompleteModule],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css'
})
export class HeroSearhComponent {
  heroes$?: Observable<Hero[]>;
  heroName:FormControl = new FormControl('')
  public selectedHero?:Hero;

  constructor(private heroService: HeroService) {}
  
 public search(): void {
    this.heroes$ = this.heroName.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value  => {
        if (value && value.length >= 3) {
          return this.heroService.searchHeroes(value);
        } else {
          return of([])
        }
      })

    );
  }

  ngOnInit(): void {
    this.search()
  }

}
