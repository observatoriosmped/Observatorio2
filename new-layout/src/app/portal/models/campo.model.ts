import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export enum TipoDado {
  STRING = 'String',
  INTEGER = 'Int',
  FLOAT = 'Float',
  DATE = 'Date'
}

export enum TipoAgregacao {
  CONTAGEM = 'Contagem',
  SOMA = 'Soma',
  MEDIA = 'Média'
}

export interface ICampo {
  id: string;
  nome: string;
  descricao: string;
  tipoDado: TipoDado;
  agregacoes: TipoAgregacao[];

  updateFromFormGroup(formGroup: FormGroup): ICampo;
}

export class Campo implements ICampo {
  id: string;
  nome: string;
  descricao: string;
  tipoDado: TipoDado;
  agregacoes: TipoAgregacao[];

  constructor(id: string, nome: string, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
  }

  public static fromResource(resource: ICampo): ICampo {
    const campo = new Campo(resource.id, resource.nome, resource.descricao);
    campo.tipoDado = resource.tipoDado;
    campo.agregacoes = resource.agregacoes;
    return campo;
  }

  public updateFromFormGroup(formGroup: FormGroup): ICampo {
    this.nome = formGroup.get('nome') ? formGroup.get('nome').value : undefined;
    this.descricao = formGroup.get('descricao') ? formGroup.get('descricao').value : undefined;
    this.tipoDado = formGroup.get('tipoDado') ? formGroup.get('tipoDado').value : undefined;
    this.agregacoes = formGroup.get('agregacoes') ? formGroup.get('agregacoes').value : undefined;
    return this;
  }

}
