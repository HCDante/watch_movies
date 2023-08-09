import { Component} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { MoviesApiService } from './movies-api.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'watch_movies';
  peliculas: any[] = [];
  categoriaSeleccionada: number | undefined;

  constructor(private service: MoviesApiService) { }

  ngOnInit(): void {
    this.service.cargarPeliculasPopulares().subscribe((response: any) => {
    this.peliculas = response.results;
    });
    // console.log("No sé :v", this.peliculas);
  }
  
  onCategoriaSeleccionada(event: any) {
    const categoria = parseInt(event.target.value, 10);
    this.categoriaSeleccionada = categoria || undefined;
  }

}
