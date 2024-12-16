import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadesPerfilComponent } from './comunidades-perfil.component';

describe('ComunidadesPerfilComponent', () => {
  let component: ComunidadesPerfilComponent;
  let fixture: ComponentFixture<ComunidadesPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunidadesPerfilComponent]
    });
    fixture = TestBed.createComponent(ComunidadesPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
