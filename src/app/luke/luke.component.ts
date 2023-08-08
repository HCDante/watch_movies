import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css']
})
export class LukeComponent implements OnChanges {
  @Input() peliculas: any[] | undefined; // JSON de API
  @Input() categoriaSeleccionada: number | undefined; // ID de la categoría seleccionada

  peliculasFiltradas: any[] | undefined;
  cantidadPeliculasMostradas: number | undefined;

  ngOnChanges() {
    if (!this.peliculas || !this.peliculas.length ) {
      this.peliculas = [];

      return
    };
    if (this.peliculas && this.categoriaSeleccionada !== undefined) {
      console.log('Esto es de pelis', this.peliculas);
      this.peliculasFiltradas = this.peliculas.filter(
        pelicula => pelicula.genre_ids.includes(this.categoriaSeleccionada)

      );

      this.cantidadPeliculasMostradas = this.peliculasFiltradas.length;
    }
    else {
      this.peliculasFiltradas = this.peliculas;
      this.cantidadPeliculasMostradas = this.peliculas.length;
    }
  }
}
