import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacineComponent } from './racine/racine.component';
import { CreatekittenComponent } from './createkitten/createkitten.component';
import { ListkittenComponent } from './listkitten/listkitten.component';
import { UserkittenComponent } from './userkitten/userkitten.component';

@NgModule({
  declarations: [
    AppComponent,
    RacineComponent,
    CreatekittenComponent,
    ListkittenComponent,
    UserkittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
    ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
