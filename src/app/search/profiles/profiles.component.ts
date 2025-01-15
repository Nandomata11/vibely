import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
// Lista de cuentas (puedes reemplazarla con datos reales)
cuentas = [
  { nombre: 'Perfil 1', descripcion: 'Descripción del perfil 1', siguiendo: false },
  { nombre: 'Perfil 2', descripcion: 'Descripción del perfil 2', siguiendo: false },
  { nombre: 'Perfil 3', descripcion: 'Descripción del perfil 3', siguiendo: true },
  { nombre: 'Perfil 4', descripcion: 'Descripción del perfil 4', siguiendo: false },
  { nombre: 'Perfil 5', descripcion: 'Descripción del perfil 5', siguiendo: true },
];

constructor(private router: Router) {}

// Método para alternar el estado de "seguir" o "siguiendo"
toggleFollow(cuenta: any): void {
  cuenta.siguiendo = !cuenta.siguiendo;
}

// Método para redirigir al perfil de la cuenta seleccionada
verPerfil(cuenta: any): void {
  this.router.navigate([`/profile`]); // Suponiendo que el nombre es parte de la ruta
}
}
