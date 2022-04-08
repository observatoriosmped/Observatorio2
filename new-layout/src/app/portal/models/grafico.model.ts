import { FormGroup } from '@angular/forms';
import { TipoAgregacao } from './campo.model';
import { ISerie } from './serie.model';

export interface IGrafico {
  id: string;
  titulo: string;
  descricao: string;
  autor: string;
  dimensao: string;
  fonte: string;
  metrica: string;
  agregacao: TipoAgregacao;

  series: ISerie[];
}

export class Grafico implements IGrafico {

  id: string;
  titulo: string;
  descricao: string;
  autor: string;
  dimensao: string;
  fonte: string;
  metrica: string;
  agregacao: TipoAgregacao;

  series: ISerie[];

  constructor(id: string, titulo: string, descricao: string, autor: string,
              fonte: string, dimensao: string, metrica: string, agregacao: TipoAgregacao) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.autor = autor;
    this.dimensao = dimensao;
    this.metrica = metrica;
    this.fonte = fonte;
    this.agregacao = agregacao;
  }

  public static fromFormGroup(formGroup: FormGroup): IGrafico {
    const id = undefined;
    const titulo = formGroup.get('titulo') ? formGroup.get('titulo').value : undefined;
    const autor = formGroup.get('autor') ? formGroup.get('autor').value : undefined;
    const descricao = formGroup.get('descricao') ? formGroup.get('descricao').value : undefined;
    const fonte = formGroup.get('fonte') ? formGroup.get('fonte').value : undefined;
    const dimensao = formGroup.get('dimensao') ? formGroup.get('dimensao').value : undefined;
    const metrica = formGroup.get('metrica') ? formGroup.get('metrica').value : undefined;
    const agregacao = formGroup.get('agregacao') ? formGroup.get('agregacao').value : undefined;

    return new Grafico(id, titulo, descricao, autor, fonte, dimensao, metrica, agregacao);
  }

  public static fromResource(resource: IGrafico) {
    const grafico = new Grafico(resource.id, resource.titulo, resource.descricao, resource.autor,
      resource.fonte, resource.dimensao, resource.metrica, resource.agregacao);
    grafico.series = resource.series;
    return grafico;
  }
}

