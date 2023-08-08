import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'watch_movies';
  peliculas: any[] = [];
  categoriaSeleccionada: number | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargarPeliculasPopulares();
  }
  cargarPeliculasPopulares() {
    const apiKey = '89c8b3c14254938af927c09b68560c0f';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=89c8b3c14254938af927c09b68560c0f`;

    this.http.get(url).subscribe((response: any) => {
      this.peliculas = response.results;
    });
  }

  onCategoriaSeleccionada(event: any) {
    const categoria = parseInt(event.target.value, 10);
    this.categoriaSeleccionada = categoria || undefined;
  }
}
