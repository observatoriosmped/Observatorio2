import { map } from 'rxjs/operators';

export interface ISerie {
  nome: string;
  itens: Item[];

}

export interface Item {
  valor: number;
  nome: string;
}

export class Serie implements ISerie {
  nome: string;
  itens: Item[];

  constructor(nome: string, itens: Item[]) {
    this.nome = nome;
    this.itens = itens;
  }

  public static fromResource(resource: ISerie) {
    const serie = new Serie(resource.nome, resource.itens);
    return serie;
  }

  public static toArray(serie: Serie) {
    const array: Array<any> = [serie.nome];
    serie.itens.map(item => {
      array.push(item);
    });
    return array;
  }
}
