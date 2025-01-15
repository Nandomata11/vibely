import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { StoriesComponent } from './stories/stories.component';
import { MessagesComponent } from './messages/messages.component';
import { CommunitysComponent as SearchCommunitysComponent } from './search/communitys/communitys.component';
import { PostsComponent } from './search/posts/posts.component';
import { ProfilesComponent } from './search/profiles/profiles.component';
import { PostsComponent as ProfilePostsComponent } from './profile/posts/posts.component';
import { CommunitysComponent as ProfileCommunitysComponent } from './profile/communitys/communitys.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stories', component: StoriesComponent },
  {
    path: '',
    component: NavbarComponent, // Punto de entrada después de login
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'community', component: CommunityComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          { path: '', redirectTo: 'posts', pathMatch: 'full' },
          { path: 'posts', component: ProfilePostsComponent },
          { path: 'communitys', component: ProfileCommunitysComponent },
        ],
      },
      {
        path: 'search',
        component: SearchComponent,
        children: [
          { path: '', redirectTo: 'posts', pathMatch: 'full' },
          { path: 'communitys', component: SearchCommunitysComponent },
          { path: 'posts', component: PostsComponent },
          { path: 'profiles', component: ProfilesComponent },
        ],
      },
      { path: 'messages', component: MessagesComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
