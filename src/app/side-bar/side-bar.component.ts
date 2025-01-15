import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Output() heightChange = new EventEmitter<string>();

  toggleSidebar() {
    const newHeight = '500px'; // Cambia el valor según sea necesario
    this.heightChange.emit(newHeight);
  }

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
    if (this.selectedFile) {
      console.log('Subiendo publicación:', {
        file: this.selectedFile,
        description: this.description,
      });
      // Aquí puedes añadir lógica para subir la publicación al servidor.
    }
  }
}
