import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatCardListComponent } from './cat-card-list/cat-card-list.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CatFormPostComponent } from './cat-form-post/cat-form-post.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatCardListComponent,
    CatCardComponent,
    CatFormPostComponent
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
