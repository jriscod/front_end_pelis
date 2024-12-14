import { Component, OnInit } from '@angular/core';
import { RatingComponent } from "../compartidos/componentes/rating/rating.component";
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";
import { ListadoGenericoComponent } from '../compartidos/componentes/listado-generico/listado-generico.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RatingComponent, ListadoPeliculasComponent, ListadoGenericoComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  peliculasenCine!: any[];
  peliculasEstreno!: any[];
  ngOnInit(): void {
    setTimeout(() => {
        this.peliculasenCine = [{
          titulo: 'Spider-Man',
          fecha: new Date(),
          precio: 100,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/450px-Spider-Man.jpg'
        },
        {
          titulo: 'Dragon Ball',
          fecha: new Date(),
          precio: 100,
          image: 'https://img2.rtve.es/i/?w=1600&i=1657019154219.jpg'
        },
        {
          titulo: 'DeadPool',
          fecha: new Date(),
          precio: 100,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Deadpool%2C_Georgia_Viaduct%2C_Vancouver%2C_April_6_2015_-_3.jpg/480px-Deadpool%2C_Georgia_Viaduct%2C_Vancouver%2C_April_6_2015_-_3.jpg'
        },
        {
          titulo: 'Iron Man',
          fecha: new Date(),
          precio: 100,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Iron_Man_Repulsors_%2814041559344%29.jpg/480px-Iron_Man_Repulsors_%2814041559344%29.jpg'
        },
        {
          titulo: 'Capitan America',
          fecha: new Date(),
          precio: 100,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Montreal_Comiccon_2016_-_Captain_America_%2827968502960%29.jpg/480px-Montreal_Comiccon_2016_-_Captain_America_%2827968502960%29.jpg'
        }
      ];

      this.peliculasEstreno = [{
        titulo: 'One Piece',
        fecha: new Date(),
        precio: 100,
        image: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg'
      },
      {
        titulo: 'Dragon Ball',
        fecha: new Date(),
        precio: 100,
        image: 'https://static.cinepolis.com/img/peliculas/48049/1/1/48049.jpg'
      },
      {
        titulo: 'Avengers - EndGame',
        fecha: new Date(),
        precio: 100,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Avengers_endgame_logo.png/375px-Avengers_endgame_logo.png'
      }
      ];
    }, 100);
  }
}
