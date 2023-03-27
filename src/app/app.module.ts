import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeroModule } from './hero/hero.module';
import { UploadPageComponent } from './file/upload-page/upload-page.component';
import { FormPracticaComponent } from './formularios/form-practica/form-practica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    UploadPageComponent,
    FormPracticaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
