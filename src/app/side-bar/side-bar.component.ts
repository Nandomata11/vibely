import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Output() heightChange = new EventEmitter<string>();

  toggleSidebar() {
    const newHeight = '500px'; // Cambia el valor según sea necesario
    this.heightChange.emit(newHeight);
  }
}
