import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
 

  constructor(private http: HttpClient) { }

  
  cargarPeliculasPopulares() {
    const apiKey = '89c8b3c14254938af927c09b68560c0f';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=89c8b3c14254938af927c09b68560c0f`;

    return this.http.get(url)
  }

  getGender () {
    const apiKey = '89c8b3c14254938af927c09b68560c0f';
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=es?api_key=89c8b3c14254938af927c09b68560c0f`;

    return this.http.get(url)
  }
  
}