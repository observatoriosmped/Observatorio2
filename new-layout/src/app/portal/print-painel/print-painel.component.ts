import { Component, OnInit } from '@angular/core';
import { IPainel } from '../models/painel.model';
import { Serie } from '../models/serie.model';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-print-painel',
  templateUrl: './print-painel.component.html',
  styleUrls: ['./print-painel.component.scss']
})
export class PrintPainelComponent implements OnInit {

  public titulo = 'Exemplo layout';
  public painel: IPainel;

  constructor(private location: Location, private route: ActivatedRoute, private printService: PrintService) { }

  ngOnInit() {
    this.painel = this.route.snapshot.data.painel;
  }

  onPrintPainel() {
    this.printService.printDocument('paineis', this.painel.id);
  }

  toObservable(series: Serie[]): Observable<any[][]> {
    return of(series.map(serie => Serie.toArray(serie)));
  }

  voltarNavegacao() {
    this.location.back();
  }

}
