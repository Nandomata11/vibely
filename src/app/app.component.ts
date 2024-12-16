import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importación del Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vibely';
  sidebarHeight: string = '100px';

  constructor(private router: Router) {} // Inyectar el Router en el constructor

  // Método para actualizar la altura de la sidebar
  updateSidebarHeight(newHeight: string) {
    this.sidebarHeight = newHeight;
  }

  // Método para detectar si la página actual es Login o Registro
  isAuthPage(): boolean {
    const authRoutes = ['/login', '/register'];
    return authRoutes.includes(this.router.url);
  }
}
