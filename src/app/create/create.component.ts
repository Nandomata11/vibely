import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  description: string = '';
  isImage: boolean = false;
  isVideo: boolean = false;

  // Método para manejar el cambio de archivo
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];

    if (file) {
      this.selectedFile = file;
      this.previewFile(file);
    }
  }

  // Método para mostrar la vista previa del archivo
  previewFile(file: File): void {
    const reader = new FileReader();

    reader.onloadend = () => {
      this.previewUrl = reader.result;
    };

    if (file.type.startsWith('image')) {
      this.isImage = true;
      this.isVideo = false;
    } else if (file.type.startsWith('video')) {
      this.isImage = false;
      this.isVideo = true;
    }

    reader.readAsDataURL(file);
  }

  // Método para manejar el envío del formulario (sin backend)
  onSubmit(): void {
    if (this.selectedFile && this.description) {
      console.log('Archivo:', this.selectedFile);
      console.log('Descripción:', this.description);
      // Aquí se manejaría la subida al backend
      alert('Publicación subida (Simulada)!');
    } else {
      alert('Por favor, selecciona un archivo y agrega una descripción');
    }
  }
}
