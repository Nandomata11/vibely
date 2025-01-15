import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  isImage = false;
  isVideo = false;
  description: string = '';

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.previewUrl = reader.result;
        this.isImage = this.selectedFile?.type.startsWith('image') || false;
        this.isVideo = this.selectedFile?.type.startsWith('video') || false;
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    alert("Subiendo post");
    if (this.selectedFile) {
      console.log('Subiendo publicación:', {
        file: this.selectedFile,
        description: this.description,
      });
      // Aquí puedes añadir lógica para subir la publicación al servidor.
      this.selectedFile = null;
    }
  }
}
