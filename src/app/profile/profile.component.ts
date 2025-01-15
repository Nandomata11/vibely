import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  usuario = {
    nombre: 'Juan Pérez',
    descripcion: 'Amante de la tecnología y el diseño web.',
    publicaciones: 34,
    seguidores: 120,
    seguidos: 75
  };

  constructor(private router: Router) {}

  // Redirigir a la página de mensajes
  goToMessages(): void {
    this.router.navigate(['/messages']);
  }

  // Variable para cambiar entre "publicaciones" y "comunidades"
  currentSection: string = 'publicaciones'; // Opción por defecto
}
