import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { listaTipi } from '../listaTipi.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lista-tipi',
  templateUrl: './lista-tipi.component.html',
  styleUrls: ['./lista-tipi.component.css']
})
export class ListaTipiComponent {
  tipidata! : listaTipi[]
  o! : Observable<any>
  loading! : boolean

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.loading = true; 
    this.o = this.http.get<listaTipi[]>('https://pokeapi.co/api/v2/type');
    this.o.subscribe(this.getData);
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getData = (d: any) => {
    console.log(d); 
    this.tipidata = d.results;
    this.loading = false;
  }

  getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); 
      console.log (uri_param); 
    }

}
