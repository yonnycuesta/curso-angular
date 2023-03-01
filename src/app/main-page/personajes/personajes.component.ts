import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajeService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent {
  // Componente hijo
  // @Input() personajesHijo: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.perservice.personajes;
  }

  constructor(private perservice: PersonajeService) {}
}
