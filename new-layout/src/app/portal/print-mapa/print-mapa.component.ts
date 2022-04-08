import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { IMapa } from '../models/mapa.model';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-print-mapa',
  templateUrl: './print-mapa.component.html',
  styleUrls: ['./print-mapa.component.scss']
})
export class PrintMapaComponent implements AfterViewInit, OnInit {

  @Input() indicador: IMapa;
  private paleta = ['#bd0026', '#f03b20', '#fd8d3c', '#fecc5c', '#ffffb2'];
  private mymap: any;
  public id: string;
  constructor() {

  }

  ngAfterViewInit() {

    // Invoca o mapa
    this.invocaMapa();


    // Carrega a camada de fundo
    this.adicionarRegioes(this.indicador);
    // Cria as regiões com os seus atributos

    // Cria a legenda
    this.criarLegenda(this.indicador);

  }

  ngOnInit() {
    this.id = uuid();
  }
  private invocaMapa() {
    this.mymap = L.map('map-' + this.id).setView([-23.7, -46.7], 9.3);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
        'contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.mymap);

  }


  private adicionarRegioes(mapa: IMapa) {
    for (let j = 0; j < mapa.regioes.length; j++) {
      const polygon = [];
      for (let i = 0; i < mapa.regioes[j].coordenadas.length; i++) {
        polygon.push([this.indicador.regioes[j].coordenadas[i].y, this.indicador.regioes[j].coordenadas[i].x]);
      }
      if (mapa.regioes[j].valor === undefined || isNaN(mapa.regioes[j].valor)) {
        L.polygon(polygon, {
          color: mapa.regioes[j].cor,
          fillOpacity: 0.5
        }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
          + '<h4 >Valor: Sem dados</h4>').addTo(this.mymap);
      } else {
        L.polygon(polygon, {
          color: mapa.regioes[j].cor,
          fillOpacity: 0.5
        }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
          + '<h4 >Valor: ' + mapa.regioes[j].valor + '</h4>').addTo(this.mymap);
      }
    }
  }

  getColor(valor: number, max: number) {
    const limit = Math.trunc(max * 0.8);
    return valor > limit ? this.paleta[0] :
      valor > limit / 2 ? this.paleta[1] :
        valor > limit / 4 ? this.paleta[2] :
          valor > limit / 8 ? this.paleta[3] :
            this.paleta[4];
  }

  // done
  private criarLegenda(mapa: IMapa) {
    const self = this;
    const legend = new L.Control({ position: 'bottomright' });
    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0,
        Math.trunc(mapa.max * 0.8 / 8),
        Math.trunc(mapa.max * 0.8 / 4),
        Math.trunc(mapa.max * 0.8 / 2),
        Math.trunc(mapa.max * 0.8)];
      div.innerHTML +=
        '<div style="display: flex;align-items: center;"><div style="width: 0; height: 0;border: 8.8px solid #AAAAAA;">' +
        '</div><p style="    font-weight: 600;margin: 0 0px 0px 5px;">Sem dados</p</div>';
      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<div><div style="width: 0; height: 0;border: 10px solid ' + self.getColor(grades[i] + 1, mapa.max) + ';"></div> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</div>' : '+');
      }
      return div;
    };
    legend.addTo(this.mymap);
  }
}
