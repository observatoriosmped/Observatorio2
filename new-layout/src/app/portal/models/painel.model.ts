import { FormGroup } from '@angular/forms';
import { ITemplate } from './template.model';

export interface IPainel {
  id: string;
  titulo: string;
  descricao: string;
  autor: string;
  tema: string;

  criacao: number;
  ultimaAteracao: number;

  template: ITemplate;
}

export class Painel implements IPainel {
  id: string;
  titulo: string;
  descricao: string;
  autor: string;
  tema: string;

  criacao: number;
  ultimaAteracao: number;

  template: ITemplate;

  constructor(id: string, titulo: string, descricao: string, autor: string, criacao: number, ultimaAteracao: number, tema: string) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.autor = autor;
    this.criacao = criacao;
    this.ultimaAteracao = ultimaAteracao;
    this.tema = tema;

  }

  public static fromFormGroup(formGroup: FormGroup): IPainel {
    const id = undefined;
    const titulo = formGroup.get('titulo') ? formGroup.get('titulo').value : undefined;
    const autor = formGroup.get('autor') ? formGroup.get('autor').value : undefined;
    const descricao = formGroup.get('descricao') ? formGroup.get('descricao').value : undefined;
    const tema = formGroup.get('tema') ? formGroup.get('tema').value : undefined;

    return new Painel(id, titulo, descricao, autor, null, null, tema);
  }

  public static fromResource(resource: IPainel) {
    const painel = new Painel(resource.id, resource.titulo, resource.descricao, resource.autor,
    resource.criacao, resource.ultimaAteracao, resource.tema);
    painel.template = resource.template;

    return painel;
  }
}
