import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';  // Campo para el correo electrónico
  password: string = '';  // Campo para la contraseña
  errorMessage: string = '';  // Mensaje de error en caso de credenciales incorrectas

  // Array de usuarios de prueba
  private users = [
    { email: 'a@a.com', password: 'a' }
  ];

  constructor(private router: Router) {}  // Inyectar Router

  // Método de inicio de sesión
  onLogin() {
    const user = this.users.find(
      (u) => u.email === this.email && u.password === this.password
    );

    if (user) {
      this.errorMessage = '';  // Limpiar mensaje de error
      console.log('Login exitoso');
      
      // Redirigir a la página principal (home) si las credenciales son correctas
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Credenciales inválidas';
    }
  }
}
