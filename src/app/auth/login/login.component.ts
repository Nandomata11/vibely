import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  resetEmail: string = '';
  showForgotPassword: boolean = false;
  resetMessage: string = '';
  resetError: string = '';

  constructor(private router: Router) {}

  toggleForgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;  // Cambiar el estado para mostrar u ocultar el cuadro
  }

  onSubmit() {
    // Usuario y contraseña predeterminados
    const validEmail = 'a@a.com';
    const validPassword = 'a';

    // Verificar si el correo y la contraseña coinciden con los valores predeterminados
    if (this.email === validEmail && this.password === validPassword) {
      // Redirigir al usuario a la página principal
      this.router.navigate(['/home']);
    } else {
      // Si las credenciales no coinciden, mostrar un mensaje de error
      this.resetError = 'Correo o contraseña incorrectos.';
    }
  }

  onSubmitForgotPassword() {
    if (this.resetEmail) {
      this.resetMessage = 'Se ha enviado el enlace de restablecimiento al correo.';
      this.resetError = '';
    } else {
      this.resetMessage = '';
      this.resetError = 'Por favor ingresa un correo válido.';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);  // Redirige a la página de registro
  }
}
