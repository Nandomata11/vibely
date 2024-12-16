import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';  // Campo para el nombre completo
  email: string = '';  // Campo para el correo electrónico
  password: string = '';  // Campo para la contraseña
  errorMessage: string = '';  // Mensaje de error en caso de fallar el registro

  // Array de usuarios de prueba
  private users = [
    { email: 'a@a.com', password: 'a' }
  ];

  constructor(private router: Router) {}  // Inyectar Router

  // Método para manejar el registro
  onRegister() {
    // Verificar si ya existe un usuario con el mismo correo
    const existingUser = this.users.find((u) => u.email === this.email);

    if (existingUser) {
      this.errorMessage = 'Este correo electrónico ya está registrado';
    } else {
      // Registrar el nuevo usuario
      this.users.push({ email: this.email, password: this.password });
      this.errorMessage = '';  // Limpiar mensaje de error
      console.log('Registro exitoso');
      
      // Redirigir a la página principal (home) tras el registro exitoso
      this.router.navigate(['/home']);
    }
  }
}
