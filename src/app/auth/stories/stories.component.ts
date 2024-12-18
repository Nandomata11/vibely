import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
  // Array de imágenes para las historias
  images = [
    '../../assets/ejemplo1.jpg',
    '../../assets/ejemplo2.jpg',
    '../../assets/ejemplo3.jpg',
    '../../assets/ejemplo4.jpg', // Aquí puedes agregar las imágenes que quieras
  ];

  currentIndex = 0; // Índice actual de la imagen

  // Cambiar la imagen a la siguiente
  goToNext() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Regresar al inicio si está en la última imagen
    }
  }

  // Cambiar la imagen a la anterior
  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Ir a la última imagen si está en la primera
    }
  }
}
