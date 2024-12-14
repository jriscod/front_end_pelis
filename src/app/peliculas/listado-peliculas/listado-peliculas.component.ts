import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, ListadoGenericoComponent, ListadoGenericoComponent, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit{
  ngOnInit(): void {
  
  }
    @Input({required: true})
    peliculas!: any[];

    
}
