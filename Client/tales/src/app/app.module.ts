import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PostTalesComponent } from './Components/post-tales/post-tales.component';
import { GridTalesComponent } from './Components/grid-tales/grid-tales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostTalesComponent,
    GridTalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
