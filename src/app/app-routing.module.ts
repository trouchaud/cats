import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFormPostComponent } from './cat-form-post/cat-form-post.component';
import { CatCardListComponent } from './cat-card-list/cat-card-list.component';

const routes: Routes = [
  { path: 'cat', component: CatFormPostComponent },
  { path: '', component: CatCardListComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
