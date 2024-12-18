import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { listaTipi } from '../listaTipi.model';
import { Observable } from 'rxjs';
import { ListaPoke } from '../listaTipiPoke.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent {
  o! : Observable<any>
  pokedata! : ListaPoke[]
  loading! : boolean
  url = 'https://pokeapi.co/api/v2/type'

  constructor(private http: HttpClient, private route: ActivatedRoute) {
      this.loading = true; 
      this.o = this.http.get<ListaPoke>(this.url )
      this.o.subscribe(this.getData);
      this.route.paramMap.subscribe(this.getRouterParam);
    }

    getRouterParam = (params: ParamMap) =>
      {
        let uri_param = params.get('id'); 
        console.log (uri_param);
      }

    getData = (d: any) => {
    
    }

   


}
