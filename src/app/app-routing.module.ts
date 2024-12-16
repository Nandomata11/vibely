import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateComponent } from './create/create.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { ComunidadesPerfilComponent } from './profile/comunidades-perfil/comunidades-perfil.component';
import { PublicacionesPerfilComponent } from './profile/publicaciones-perfil/publicaciones-perfil.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  // Rutas independientes para Login y Registro
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Rutas para la aplicación principal
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'create', component: CreateComponent },
  { path: 'notifications', component: NotificationsComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'publicaciones', pathMatch: 'full' },
      { path: 'publicaciones', component: PublicacionesPerfilComponent },
      { path: 'comunidades', component: ComunidadesPerfilComponent },
    ],
  },

  // Redirección por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }, // Redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
