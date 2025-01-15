import { Component } from '@angular/core';

@Component({
  selector: 'app-communitys',
  templateUrl: './communitys.component.html',
  styleUrls: ['./communitys.component.scss']
})
export class CommunitysComponent {
  // Lista de comunidades (simulación de datos)
  comunidades = [
    {
      nombre: 'Comunidad 1',
      descripcion: 'Descripción de la comunidad 1',
      miembros: 123,
      miembrosLista: ['Harry Potter', 'Ron Weasley'],
      unido: false, // Estado de si el usuario está unido
    },
    {
      nombre: 'Comunidad 2',
      descripcion: 'Descripción de la comunidad 2',
      miembros: 150,
      miembrosLista: ['Hermione Granger', 'Neville Longbottom'],
      unido: true, // Estado de si el usuario está unido
    },
    {
      nombre: 'Comunidad 3',
      descripcion: 'Descripción de la comunidad 3',
      miembros: 90,
      miembrosLista: ['Luna Lovegood', 'Ginny Weasley'],
      unido: false, // Estado de si el usuario está unido
    },
  ];

  // Método para alternar el estado de "unido" o "no unido"
  toggleJoin(comunidad: any): void {
    comunidad.unido = !comunidad.unido; // Cambiar el estado de "unido"
  }
}
