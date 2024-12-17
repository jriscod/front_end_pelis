import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [MatButtonModule,RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit{

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  @Input()
  modelo: GeneroDTO | undefined;
  @Output()
  posteoFormulario = new EventEmitter<GeneroCreacionDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
     nombre: ['',{validators: [Validators.required, primeraLetraMayuscula()]}]
  })
 
   obtenerErrorCampoNombre(){
     let nombre = this.form.controls.nombre;
     if(nombre.hasError('required')){
       return "El campo nombre es requerido";
     }
     if (nombre.hasError('primeraLetraMayuscula')) {
       return nombre.getError('primeraLetraMayuscula').mensaje;
     }
       return ""
   }

   guardarCambios(){
    if (!this.form.valid) {
      return;
    }
    const genero = this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
   }

}
