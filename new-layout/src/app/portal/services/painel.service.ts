import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPainel, Painel } from '../models/painel.model';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class PainelService {

  constructor(private http: HttpClient) { }

  getPaineis() {
    return this.http.get(environment.base_url + '/paineis').pipe(
      map((paineis: IPainel[]) => {
        return paineis.map((painel) => Painel.fromResource(painel));
      }),
      // catchError((err) => {
      //       // this.snackbar.open(err,'Fechar');
      //       return [];
      // })
    );
  }

  getPainel(painelId: string) {
    return this.http.get(environment.base_url + '/paineis/' + painelId). pipe(
      map((painel: IPainel) => {
        return Painel.fromResource(painel);
      })
    );
  }


}
