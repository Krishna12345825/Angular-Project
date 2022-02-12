import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  // {path:'',component:NavbarComponent},
  {path:'posts',component:PostsComponent},
  {path:'posts/:id',component:PostDetailComponent},
  {path:'card',component:CardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
