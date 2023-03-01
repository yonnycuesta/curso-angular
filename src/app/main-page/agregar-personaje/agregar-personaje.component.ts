import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajeService } from '../services/personajes.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.scss'],
})
export class AgregarPersonajeComponent {
  @Input('nuevoPersonaje') nuevo: Personaje = { nombre: '', poder: 0 };
  // Emitir al padre
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private perservice: PersonajeService) {}
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.perservice.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
}
