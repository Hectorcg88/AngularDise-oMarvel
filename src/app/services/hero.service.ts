import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Hero } from '../models/hero';
import { response } from 'express';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://gateway.marvel.com/v1/public/characters';
  private ts = 'patata'
  private apiKey = 'ffc839dd6268ffb71ea331c12f7d9849';
  private hash= '6d2896f4f57c32ade5741a70f0a08765';
  private offset = Math.floor(Math.random()*1555);

  constructor(private http:HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    const url = `${this.heroesUrl}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&offset=${this.offset}`;
    return this.http.get<ApiResponse>(url)
      .pipe(
        map(response => response.data.results),
      );
      console.log("hola")
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `${this.heroesUrl}?nameStartsWith=${term}&ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<ApiResponse>(url)
    .pipe(
      map(response => response.data.results.slice(0,5)),
    )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`;
    return this.http.get<ApiResponse>(url)
    .pipe(
      map(response=>response.data.results[0])
    );
  }

  getHeroesByOffset(offset: number): Observable<Hero[]> {
    const url = `${this.heroesUrl}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&offset=${offset}`;
    return this.http.get<ApiResponse>(url)
      .pipe(
        map(response => response.data.results),
      );
  }



}
