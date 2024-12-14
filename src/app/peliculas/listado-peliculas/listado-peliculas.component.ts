import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, ListadoGenericoComponent, ListadoGenericoComponent, MatButtonModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit{
  ngOnInit(): void {
  
  }
    @Input({required: true})
    peliculas!: any[];
    agregarPelicula(){
      this.peliculas.push({
        titulo:'IT',
        fechaLanzamiento: new Date('2012-07-03'),
        precio: 500
      })
    }

    eliminarPelicula(peliculas: any){
const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === peliculas.titulo);
this.peliculas.splice(indice, 1)
    }
}
