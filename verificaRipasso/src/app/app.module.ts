import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTipiComponent } from './lista-tipi/lista-tipi.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTipiComponent,
    ListaPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
