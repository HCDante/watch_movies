import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';

@Component({
  selector: 'app-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css']
})
export class LukeComponent implements OnChanges {
  @Input() peliculas: any[] | undefined; // JSON de API
  @Input() categoriaSeleccionada: number | undefined; // ID de la categoría seleccionada
  @Output() eventLuke: EventEmitter<any> = new EventEmitter<any>(); //Evento en el componente hijito

  peliculasFiltradas: any[] | undefined;
  cantidadPeliculasMostradas: number | undefined;

  constructor(private service: MoviesApiService) { }
  nameGender: string | undefined;

  ngOnChanges(change: SimpleChanges) {
   this.categoriaSeleccionada = change["categoriaSeleccionada"]?.currentValue || undefined;
   console.log("change",this.categoriaSeleccionada);
   
    if (!this.peliculas || !this.peliculas.length) {
      this.peliculas = [];

      return
    };
    if (this.peliculas && this.categoriaSeleccionada !== undefined) {
      // console.log('Esto es de pelis', this.peliculas);
      this.peliculasFiltradas = this.peliculas.filter(
        pelicula => pelicula.genre_ids.includes(this.categoriaSeleccionada)

      );

      this.cantidadPeliculasMostradas = this.peliculasFiltradas.length;
    }
    else {
      this.peliculasFiltradas = this.peliculas;
      this.cantidadPeliculasMostradas = this.peliculas.length;
    }
   this.getNumHijo();
    // this.service.getGender().subscribe((response: any) => {
    //   this.nameGender = response.results(this.categoriaSeleccionada);
    //   console.log("Este es el género", this.nameGender)
    //   });
  }
// Función para emitir el evento
  getNumHijo(){//Se puede poner cualquier nombre
   this.eventLuke.emit(this.cantidadPeliculasMostradas);//Dentro va el valor que se quiere emitir
   console.log("peliculas evento hijo", this.cantidadPeliculasMostradas);
   
  }

  getGender(){
    switch (this.categoriaSeleccionada) {
      case 28: return "Acción: ";
      case 12: return "Aventura: ";
      case 16: return "Animación: ";
      case 35: return "Comedia: ";
      default: return "Todas:";
  }}

  // genderName(id: number) {
  //   this.service.getGender().subscribe((response: any) => {
  //     this.nameGender = response.results[this.categoriaSeleccionada];
  //     });
      
  // }
}
