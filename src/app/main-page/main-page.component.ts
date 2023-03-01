import { Component } from '@angular/core';
import { Personaje } from './interfaces/personaje.interface';
import { PersonajeService } from './services/personajes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Dr. Strange',
    poder: 20000,
  };

  constructor(private perservice: PersonajeService) {}

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   this.personajes.push(argumento);
  // }
}
