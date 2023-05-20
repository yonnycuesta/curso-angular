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
import { ToastModule } from 'primeng/toast';
import { SelectorComponent } from './selector/selector.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UploadPageComponent,
    FormPracticaComponent,
    SelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
