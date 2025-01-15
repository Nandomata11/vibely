import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  publicaciones = [
    {
      name: 'Mi primera publicación',
      date: 'Hace 2 días',
      img: '../../assets/ejemplo1.jpg',
      description: 'Disfrutando de un hermoso día en el parque.',
      hashtags: ['#naturaleza', '#tranquilidad', '#verde']
    },
    {
      name: 'Viaje a la montaña',
      date: 'Hace 3 días',
      img: '../../assets/ejemplo3.jpg',
      description: 'Escapada increíble a las montañas. ¡Qué vistas!',
      hashtags: ['#aventura', '#montañas', '#paisaje']
    },
    {
      name: 'Mi nuevo proyecto',
      date: 'Hace 5 días',
      img: '../../assets/ejemplo2.jpg',
      description: 'Trabajando en algo emocionante. Pronto más detalles.',
      hashtags: ['#proyecto', '#creatividad', '#innovación']
    }
  ];

  showModal = false;  // Estado para mostrar/ocultar el modal
  postToDeleteIndex: number | null = null;  // Índice de la publicación a eliminar

  // Mostrar el modal de confirmación
  openDeleteModal(index: number): void {
    this.showModal = true;
    this.postToDeleteIndex = index;
  }

  // Cerrar el modal sin eliminar
  closeDeleteModal(): void {
    this.showModal = false;
    this.postToDeleteIndex = null;
  }

  // Eliminar la publicación
  deletePost(): void {
    if (this.postToDeleteIndex !== null) {
      this.publicaciones.splice(this.postToDeleteIndex, 1);  // Eliminar la publicación
      this.showModal = false;  // Cerrar el modal
      this.postToDeleteIndex = null;  // Limpiar el índice
    }
  }
}
