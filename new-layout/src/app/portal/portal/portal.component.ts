import { Component, ElementRef, HostListener, Injectable, OnInit} from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { take, first } from 'rxjs/operators';
import { IPainel } from '../models/painel.model';
import { PainelService } from '../services/painel.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss', './portal.component.css']
})
export class PortalComponent implements OnInit {

  public paineis: IPainel[];
  public paineisDataSource = new MatTableDataSource<IPainel>();
  public data$: BehaviorSubject<any> = new BehaviorSubject([]);
  public classe = 'big';

  constructor(private location: Location, private painelService: PainelService, private scroll: ViewportScroller, private router: Router) { }

  async ngOnInit() {

    this.paineis = (await this.painelService.getPaineis().pipe(first()).toPromise());
    this.paineisDataSource.data = this.paineis;
    // this.paineisDataSource.filterPredicate = (data: IPainel, filter: string) => {
    //   return data.titulo == filter || data.tema == filter;
    // }
    this.paineisDataSource.filterPredicate = (d: IPainel, filter: string) => {
      const textToSearchTi = d['titulo'] && d['titulo'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || '';
      const textToSearchTe = d['tema'] && d['tema'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || '';
      return textToSearchTi.indexOf(filter) !== -1 || textToSearchTe.indexOf(filter) !== -1;
    };
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.paineisDataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if (filterValue !== '') {
      this.classe = 'small';
    } else {
      this.classe = 'big';
    }
  }

  voltarNavegacao() {
    this.location.back();
  }

  irPainel(e: KeyboardEvent){
    document.getElementById(document.activeElement.id).click();
  }

  @HostListener('document:keydown', ['$event']) //Teclas de atalho
  onKeyDown(e: KeyboardEvent){
    let map = {};
    map[e.keyCode] = e.type == 'keydown';

    if ((e.altKey && map[49]) || (e.altKey && map[49] && e.shiftKey) || (e.shiftKey && map[49] && map[27])){
      document.getElementById("irConteudo").click();
    } else if ((e.altKey && map[50]) || (e.altKey && map[50] && e.shiftKey) || (e.shiftKey && map[50] && map[27])){
      document.getElementById("irMenu").click();
    }else if ((e.altKey && map[51]) || (e.altKey && map[51] && e.shiftKey) || (e.shiftKey && map[51] && map[27])){    
      document.getElementById("irBusca").click();
    } else if ((e.altKey && map[52]) || (e.altKey && map[52] && e.shiftKey) || (e.shiftKey && map[52] && map[27])){ 
      document.getElementById("irContraste").click();
    } else if ((e.altKey && map[53]) || (e.altKey && map[53] && e.shiftKey) || (e.shiftKey && map[53] && map[27])){    
      document.getElementById("irAcessibilidade").click();
    } else if ((e.altKey && map[54]) || (e.altKey && map[54] && e.shiftKey) || (e.shiftKey && map[54] && map[27])){
      this.scroll.scrollToPosition([0, document.body.scrollHeight]);
    }
  }
}
