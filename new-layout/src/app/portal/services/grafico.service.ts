import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IGrafico, Grafico } from '../models/grafico.model';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor(private http: HttpClient) { }

  getGraficos() {
    return this.http.get(environment.base_url + '/graficos').pipe(
      map((graficos: IGrafico[]) => {
          return graficos.map((grafico) => Grafico.fromResource(grafico));
      })
    );
  }
}
