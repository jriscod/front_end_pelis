import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent{
    
    
}
