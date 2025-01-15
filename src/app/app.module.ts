import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ProfilesComponent } from './search/profiles/profiles.component';
import { PostsComponent } from './search/posts/posts.component';
import { CommunitysComponent } from './search/communitys/communitys.component';
import { ProfileComponent } from './profile/profile.component';
import { StoriesComponent } from './stories/stories.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateComponent } from './create/create.component';
import { MessagesComponent } from './messages/messages.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { CommunityComponent } from './community/community.component';
import { CommunitysComponent as ProfileCommunitysComponent } from './profile/communitys/communitys.component';
import { PostsComponent as ProfilePostsComponent } from './profile/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    ProfilesComponent,
    PostsComponent,
    CommunitysComponent,
    ProfileComponent,
    StoriesComponent,
    NotificationsComponent,
    CreateComponent,
    MessagesComponent,
    PostModalComponent,
    CommunityComponent,
    ProfileCommunitysComponent,
    ProfilePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
