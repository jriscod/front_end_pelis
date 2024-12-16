import { Component, Input, numberAttribute } from '@angular/core';
@Component({
  selector: 'app-editar-actores',
  standalone: true,
  imports: [],
  templateUrl: './editar-actores.component.html',
  styleUrl: './editar-actores.component.css'
})
export class EditarActoresComponent {
  @Input({transform: numberAttribute})
  id!: number;
}