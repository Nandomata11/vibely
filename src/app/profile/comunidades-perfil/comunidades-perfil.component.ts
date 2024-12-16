import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidades-perfil',
  templateUrl: './comunidades-perfil.component.html',
  styleUrls: ['./comunidades-perfil.component.scss']
})
export class ComunidadesPerfilComponent {
  usuario = { nombre: 'Juan Pérez' };

  comunidades = [
    { name: 'Desarrolladores', description: 'Comunidad de desarrolladores de software' },
    { name: 'Diseñadores', description: 'Comunidad de diseñadores gráficos' }
  ];

  unirseAComunidad(comunidad: any) {
    console.log(`Te has unido a la comunidad: ${comunidad.name}`);
  }
}
