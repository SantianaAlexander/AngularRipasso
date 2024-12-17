import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipi } from './listaTipi.model';

@Component({
  selector: 'app-lista-tipi',
  templateUrl: './lista-tipi.component.html',
  styleUrls: ['./lista-tipi.component.css']
})
export class ListaTipiComponent {
  tipidata! : Tipi[]
  o! : Observable<Tipi[]>
  loading! : boolean

  constructor(private http: HttpClient) {
    this.loading = true; 
    this.o = this.http.get<Tipi[]>('https://pokeapi.co/api/v2/type');
    this.o.subscribe(this.getData);
  }

  getData = (d : Tipi[]) =>
    {
      console.log(d);
      this.tipidata = d;
      this.loading = false;
    }
}
