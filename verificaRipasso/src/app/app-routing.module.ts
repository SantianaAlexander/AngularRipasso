import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTipiComponent } from './lista-tipi/lista-tipi.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';

const routes: Routes = [
  {path: 'tipi', component: ListaTipiComponent},
  {path: 'tipi/:id', component: ListaPokemonComponent},
  {path: '', redirectTo :'/tipi', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
