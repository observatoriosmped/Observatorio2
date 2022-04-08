import { FormGroup } from '@angular/forms';
import { TipoAgregacao } from './campo.model';
import { ISerie } from './serie.model';
import { IMapa, IRegiao } from './mapa.model';

export interface IIndicador {
  id: string;
  titulo: string;
  descricao: string;
  autor: string;
  dimensao: string;
  fonte: string;
  metrica: string;
  agregacao: TipoAgregacao;
  tipo: TipoIndicador;
  series?: ISerie[];
  max?: number;
  regioes?: IRegiao[];
  criacao: number;
}

export class Indicador implements IIndicador {

  id: string;
  titulo: string;
  descricao: string;
  autor: string;
  dimensao: string;
  fonte: string;
  metrica: string;
  agregacao: TipoAgregacao;
  tipo: TipoIndicador;
  series?: ISerie[];
  max?: number;
  regioes?: IRegiao[];
  criacao: number;


  constructor(id: string, titulo: string, descricao: string, autor: string,
              fonte: string, dimensao: string, metrica: string, agregacao: TipoAgregacao, tipo: TipoIndicador,
              criacao: number, series?: ISerie[], regioes?: IRegiao[], max?: number) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.autor = autor;
    this.dimensao = dimensao;
    this.metrica = metrica;
    this.fonte = fonte;
    this.agregacao = agregacao;
    this.tipo = tipo;
    this.criacao = criacao;
    this.series = series;
    this.regioes = regioes;
    this.max = max;
  }

  public static fromFormGroup(formGroup: FormGroup): IIndicador {
    const id = undefined;
    const titulo = formGroup.get('titulo') ? formGroup.get('titulo').value : undefined;
    const autor = formGroup.get('autor') ? formGroup.get('autor').value : undefined;
    const descricao = formGroup.get('descricao') ? formGroup.get('descricao').value : undefined;
    const fonte = formGroup.get('fonte') ? formGroup.get('fonte').value : undefined;
    const dimensao = formGroup.get('dimensao') ? formGroup.get('dimensao').value : undefined;
    const metrica = formGroup.get('metrica') ? formGroup.get('metrica').value : undefined;
    const agregacao = formGroup.get('agregacao') ? formGroup.get('agregacao').value : undefined;
    const tipo = formGroup.get('tipo') ? formGroup.get('tipo').value : undefined;
    const criacao = new Date().getDate();

    return new Indicador(id, titulo, descricao, autor, fonte, dimensao, metrica, agregacao, tipo, criacao);
  }

  public static fromResource(resource: IIndicador) {
    const indicador = new Indicador(resource.id, resource.titulo, resource.descricao, resource.autor,
      resource.fonte, resource.dimensao, resource.metrica, resource.agregacao, resource.tipo, resource.criacao,
      resource.series, resource.regioes, resource.max);
    return indicador;
  }
}

export enum TipoIndicador {
  PIZZA = 'pie',
  BARRAS = 'bar',
  MAPA = 'map'
}
