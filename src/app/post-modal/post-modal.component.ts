import { Component } from '@angular/core';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent {
  // Datos de los posts
  posts = [
    {
      name: 'ejemplo',
      date: 'hace 2 días',
      location: 'Sevilla',
      image: '../../assets/ejemplo4.jpg',
      description: 'En un concurso de disfraces',
      hashtags: ['harry potter', 'ermione', 'hermione', 'granger'],
      liked: false,
      comments: [
        { username: 'Usuario1', text: '¡Gran publicación!' },
        { username: 'Usuario2', text: 'Muy buena foto.' }
      ] // Aquí estamos usando la interfaz Comment
    },
    {
      name: 'ejemplo',
      date: 'hace 2 días',
      location: 'Sevilla',
      image: '../../assets/ejemplo6.jpg',
      description: 'En un concurso de disfraces',
      hashtags: ['harry potter', 'ermione', 'granger', 'wand'],
      liked: false,
      comments: [
        { username: 'Usuario1', text: '¡Qué cool!' }
      ]
    },
    {
      name: 'ejemplo',
      date: 'hace 2 días',
      location: 'Sevilla',
      image: '../../assets/ejemplo5.jpg',
      description: 'En un concurso de disfraces',
      hashtags: ['harry potter', 'halloween', 'wand', 'magic'],
      liked: false,
      comments: []  // En este caso, no hay comentarios inicialmente
    }
  ];

  selectedPostImage: string = ''; // La imagen seleccionada para mostrar en el modal
  selectedPostComments: Array<any> = []; // Los comentarios del post seleccionado

  // Función que abre el modal y establece la imagen y los comentarios del post
  openCommentModal(index: number): void {
    const post = this.posts[index];  // Obtén el post seleccionado por el índice
    this.selectedPostImage = post.image;  // Establece la imagen
    this.selectedPostComments = post.comments || [];  // Establece los comentarios (si existen)
  }
}
