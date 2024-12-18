import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPoke } from '../listaTipiPoke.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent {
  o! : Observable<ListaPoke>
  pokedata! : ListaPoke
  loading! : boolean
  url = 'https://pokeapi.co/api/v2/type/'

  constructor(private http: HttpClient, private route: ActivatedRoute) {
      this.loading = true; 
      this.route.paramMap.subscribe(this.getRouterParam);
    }

    getRouterParam = (params: ParamMap) =>
      {
        this.o = this.http.get<ListaPoke>(this.url + params.get('id'))
        this.o.subscribe(this.getData)
      }
      getData = (data : ListaPoke) =>
        {
          this.loading= false
          this.pokedata = data
        }

   


}
