import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  confirmationMessage: string = '';
  isUsernameTaken: boolean = false;
  isEmailTaken: boolean = false;
  passwordMismatch: boolean = false;

  private users = [
    { username: 'user1', email: 'user1@vibely.com' },
    { username: 'a', email: 'a@a.com' },
    { username: 'user2', email: 'user2@vibely.com' }
  ];

  constructor(private router: Router) {}

  onRegister() {
    this.clearMessages();
    this.isUsernameTaken = this.users.some(user => user.username === this.username);
    this.isEmailTaken = this.users.some(user => user.email === this.email);
    this.passwordMismatch = this.password !== this.confirmPassword;

    if (this.isUsernameTaken) {
      this.errorMessage = 'El nombre de usuario ya está en uso.';
      return;
    }

    if (this.isEmailTaken) {
      this.errorMessage = 'El correo ya está en uso.';
      return;
    }

    if (this.passwordMismatch) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    this.users.push({ username: this.username, email: this.email });
    this.sendConfirmationEmail(this.email);
    this.confirmationMessage = `Correo de confirmación enviado a ${this.email}`;

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

  sendConfirmationEmail(email: string) {
    console.log(`Correo de confirmación enviado a ${email}`);
  }

  private clearMessages() {
    this.errorMessage = '';
    this.confirmationMessage = '';
  }
}
