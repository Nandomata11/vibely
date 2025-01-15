import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  isJoined: boolean = false; // Estado inicial del botón

  toggleJoin(): void {
    this.isJoined = !this.isJoined; // Cambia el estado al hacer clic
  }
}
