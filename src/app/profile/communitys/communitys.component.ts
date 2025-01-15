import { Component } from '@angular/core';

@Component({
  selector: 'app-communitys',
  templateUrl: './communitys.component.html',
  styleUrls: ['./communitys.component.scss']
})
export class CommunitysComponent {

  comunidades = [
    { name: 'Comunidad 1', description: 'Descripción de la comunidad 1' },
    { name: 'Comunidad 2', description: 'Descripción de la comunidad 2' },
    { name: 'Comunidad 3', description: 'Descripción de la comunidad 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
