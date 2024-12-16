import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  selectedView: string = 'publicaciones';
  
  setView(view: string): void {
    this.selectedView = view;
  }
}
