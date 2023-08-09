import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from 'src/config'; 

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  constructor(private http: HttpClient) { }
 
  cargarPeliculasPopulares() {
    
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    return this.http.get(url)
  }

  getGender () {
    
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=es?api_key=${apiKey}`;

    return this.http.get(url)
  }
  
}