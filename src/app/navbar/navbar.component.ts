import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sidebarHeight: string = '100vh'; // Inicialmente en 100% en pantallas grandes
  isMobile: boolean = false; // Para saber si estamos en una pantalla pequeña

  // Escucha cambios en el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = event.target.innerWidth <= 768;
    // Si estamos en pantalla pequeña, establecemos la altura en fit-content
    if (this.isMobile) {
      this.sidebarHeight = '100px';
    } else {
      this.sidebarHeight = '100vh'; // Devolvemos a 100% cuando no es pantalla pequeña
    }
  }

  // Alternar la altura solo en pantallas pequeñas
  toggleSidebar(): void {
    if (this.isMobile) {
      this.sidebarHeight = this.sidebarHeight === 'fit-content' ? '100px' : 'fit-content';
    }
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
    alert("Subiendo post");
    if (this.selectedFile) {
      console.log('Subiendo publicación:', {
        file: this.selectedFile,
        description: this.description,
      });
      // Aquí puedes añadir lógica para subir la publicación al servidor.
    }
  }
}
