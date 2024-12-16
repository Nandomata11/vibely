import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateComponent } from './create/create.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ComunidadesComponent } from './comunidades/comunidades.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { ComunidadesPerfilComponent } from './profile/comunidades-perfil/comunidades-perfil.component';
import { PublicacionesPerfilComponent } from './profile/publicaciones-perfil/publicaciones-perfil.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SideBarComponent,
    ProfileComponent,
    NotificationsComponent,
    MessagesComponent,
    CreateComponent,
    PublicacionesComponent,
    ComunidadesComponent,
    CuentasComponent,
    ComunidadesPerfilComponent,
    PublicacionesPerfilComponent,
    LoginComponent,
    RegisterComponent,
    StoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
