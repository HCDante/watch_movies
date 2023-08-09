import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LukeComponent } from './luke/luke.component';
import { MoviesApiService } from './movies-api.service';
@NgModule({
  declarations: [
    AppComponent,
    LukeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesApiService],
  bootstrap: [AppComponent]

})
export class AppModule { }
