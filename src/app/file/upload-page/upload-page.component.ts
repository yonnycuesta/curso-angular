import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss'],
})
export class UploadPageComponent {
  public previsualizacion: string = '';
  public archivos: any[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0];
    this.archivos.push(archivoCapturado);
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    });
  }

  subirArchivo(): any {
    try {
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo) => {
        console.log('Archivo', archivo);
        formularioDeDatos.append('file', archivo);
      });
      // Aquí se envía el formulario con los archivos al backend
      // this.http.post('url', formularioDeDatos).subscribe((res) => {
      //   console.log(res);
      // });
    } catch (err) {
      console.log(err);
    }
  }
  extraerBase64 = async ($event: any) =>
    new Promise((resolve): any => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        return null;
      }
    });
}
