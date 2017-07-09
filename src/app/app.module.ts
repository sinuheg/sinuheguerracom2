import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';

const ROUTES = [
  /*{
    path:'',
    redirectTo: 'profile',
    pathMatch: 'full'
  },*/
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
