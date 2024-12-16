import { Component } from '@angular/core';

@Component({
  selector: 'app-publicaciones-perfil',
  templateUrl: './publicaciones-perfil.component.html',
  styleUrls: ['./publicaciones-perfil.component.scss']
})
export class PublicacionesPerfilComponent {
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
    },
    {
      name: 'Mi nuevo proyecto',
      date: 'Hace 5 días',
      img: '../../assets/ejemplo2.jpg',
      description: 'Trabajando en algo emocionante. Pronto más detalles.',
      hashtags: ['#proyecto', '#creatividad', '#innovación']
    },
    {
      name: 'Mi nuevo proyecto',
      date: 'Hace 5 días',
      img: '../../assets/ejemplo2.jpg',
      description: 'Trabajando en algo emocionante. Pronto más detalles.',
      hashtags: ['#proyecto', '#creatividad', '#innovación']
    },
    {
      name: 'Mi nuevo proyecto',
      date: 'Hace 5 días',
      img: '../../assets/ejemplo2.jpg',
      description: 'Trabajando en algo emocionante. Pronto más detalles.',
      hashtags: ['#proyecto', '#creatividad', '#innovación']
    }
  ];
}
