import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
 private router = inject(Router);
 
  guardarCambios(genero: GeneroCreacionDTO){
    //this.router.navigate(['/generos']);
    console.log('Creando el genero',genero);
  }

}
