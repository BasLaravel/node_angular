import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsIndexComponent } from './posts-index/posts-index.component';

const routes: Routes = [

   { path: 'index', component: PostsIndexComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
