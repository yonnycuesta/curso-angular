import { MainPageComponent } from './../main-page/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from '../main-page/personajes/personajes.component';
import { AgregarPersonajeComponent } from '../main-page/agregar-personaje/agregar-personaje.component';
import { PersonajeService } from '../main-page/services/personajes.service';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarPersonajeComponent,
  ],
  exports: [MainPageComponent, PersonajesComponent, AgregarPersonajeComponent],
  imports: [CommonModule, FormsModule],
  providers: [
    PersonajeService
  ],
})
export class HeroModule {}
