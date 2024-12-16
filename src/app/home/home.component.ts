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
      liked: false
    },
    {
      name: 'ejemplo',
      date: 'hace 2 días',
      location: 'Sevilla',
      image: '../../assets/ejemplo6.jpg',
      description: 'En un concurso de disfraces',
      hashtags: ['harry potter', 'ermione', 'granger', 'wand'],
      liked: false
    },
    {
      name: 'ejemplo',
      date: 'hace 2 días',
      location: 'Sevilla',
      image: '../../assets/ejemplo5.jpg',
      description: 'En un concurso de disfraces',
      hashtags: ['harry potter', 'halloween', 'wand', 'magic'],
      liked: false
    }
  ];

  // Datos de las historias
  stories = [
    { name: 'ejemplo', image: '../../assets/noPerfil.png' },
    { name: 'ejemplo', image: '../../assets/noPerfil.png' },
    { name: 'ejemplo', image: '../../assets/noPerfil.png' }
  ];

  constructor(private router: Router) {}

  // Función para alternar el "like" en los posts
  toggleLike(postIndex: number) {
    this.posts[postIndex].liked = !this.posts[postIndex].liked;
  }

  // Función para abrir el modal de comentarios (en este caso se ha desactivado)
  openCommentModal(postIndex: number) {
    alert(`¡Puedes agregar un comentario en el post ${postIndex + 1} más tarde!`);
  }

  // Función para redirigir a la página de mensajes
  goToMessages() {
    this.router.navigate(['/messages']);
  }
}
