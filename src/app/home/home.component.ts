import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
  

  // Datos de las historias
  stories = [
    { name: 'ejemplo', image: '../../assets/noPerfil.png' },
    { name: 'ejemplo', image: '../../assets/noPerfil.png' },
    { name: 'ejemplo', image: '../../assets/noPerfil.png' }
  ];

  selectedPostImage: string = ''; // La imagen seleccionada para mostrar en el modal
  selectedPostComments: Array<any> = []; // Los comentarios del post seleccionado

  // Función que abre el modal y establece la imagen y los comentarios del post
  openCommentModal(index: number): void {
    const post = this.posts[index];  // Obtén el post seleccionado por el índice
    this.selectedPostImage = post.image;  // Establece la imagen
    this.selectedPostComments = post.comments || [];  // Establece los comentarios (si existen)
  }

  constructor(private router: Router) {}

  // Función para alternar el "like" en los posts
  toggleLike(postIndex: number) {
    this.posts[postIndex].liked = !this.posts[postIndex].liked;
  }

  // Función para redirigir a la página de mensajes
  goToMessages() {
    this.router.navigate(['/messages']);
  }
}
