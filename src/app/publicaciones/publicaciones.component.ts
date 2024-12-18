import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent {
// Datos de las publicaciones
posts = [
  {
    name: 'ejemplo',
    date: 'hace 2 días',
    location: 'Sevilla',
    image: '../../assets/ejemplo3.jpg',
    description: 'En un concurso de disfraces',
    hashtags: ['harry potter', 'ermione', 'hermione', 'granger'],
    liked: false,
    comments: []  // Inicialmente vacío
  },
  {
    name: 'ejemplo',
    date: 'hace 2 días',
    location: 'Sevilla',
    image: '../../assets/ejemplo1.jpg',
    description: 'En un concurso de disfraces',
    hashtags: ['harry potter', 'ermione', 'granger', 'wand'],
    liked: false,
    comments: []  // Inicialmente vacío
  },
  {
    name: 'ejemplo',
    date: 'hace 2 días',
    location: 'Sevilla',
    image: '../../assets/ejemplo2.jpg',
    description: 'En un concurso de disfraces',
    hashtags: ['harry potter', 'halloween', 'wand', 'magic'],
    liked: false,
    comments: []  // Inicialmente vacío
  }
];

// Imagen seleccionada para mostrar en el modal
selectedPostImage: string = '';
// Comentarios del post seleccionado
selectedPostComments: Array<any> = [];
// Texto para el nuevo comentario
newCommentText: string = '';

// Función que abre el modal y establece la imagen y los comentarios del post
openCommentModal(index: number): void {
  const post = this.posts[index];  // Obtén el post seleccionado por el índice
  this.selectedPostImage = post.image;  // Establece la imagen
  this.selectedPostComments = post.comments || [];  // Establece los comentarios (si existen)
}

// Función para alternar el "like" en los posts
toggleLike(postIndex: number) {
  this.posts[postIndex].liked = !this.posts[postIndex].liked;
}

// Función para agregar un comentario
addComment(): void {
  if (this.newCommentText.trim()) {
    const newComment = {
      username: 'Nuevo Usuario',  // Puedes cambiar este texto por el nombre del usuario real
      text: this.newCommentText
    };
    this.selectedPostComments.push(newComment);  // Agrega el comentario
    this.newCommentText = '';  // Limpia el campo de texto
  }
}
}
