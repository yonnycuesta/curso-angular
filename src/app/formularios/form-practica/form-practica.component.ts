import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-practica',
  templateUrl: './form-practica.component.html',
  styleUrls: ['./form-practica.component.scss'],
  providers: [MessageService],
})
export class FormPracticaComponent implements OnInit {
  // TODO: Temporal
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  loading : boolean = false;

  noPuedesSerJorge(control: FormControl){
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === 'jorge'){
      return {
        noJorge: true,
      }
    }
    return null;
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.nombreApellidoPattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.noPuedesSerJorge]],
  });

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jorge Perez',
      email: 'yocumo@gmail.com',
      username: 'yocumo123',
    });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

  load(){
    this.loading = true;
  }

  show(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }


}
