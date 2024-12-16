import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPerfilComponent } from './publicaciones-perfil.component';

describe('PublicacionesPerfilComponent', () => {
  let component: PublicacionesPerfilComponent;
  let fixture: ComponentFixture<PublicacionesPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicacionesPerfilComponent]
    });
    fixture = TestBed.createComponent(PublicacionesPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
