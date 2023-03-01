import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable()
export class PersonajeService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Spiderman',
      poder: 100,
    },
    {
      nombre: 'Ironman',
      poder: 80,
    },
    {
      nombre: 'Hulk',
      poder: 200,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personje: Personaje) {
    this._personajes.push(personje);
  }
}
