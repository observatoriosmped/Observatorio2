import { ISerie } from './serie.model';
import { TipoAgregacao } from './campo.model';
import { Indicador, TipoIndicador, IIndicador } from './indicador.model';

export interface IRegiao extends IItem {
    cor: string;
    coordenadas: ICoordenada[];
}
export class Regiao implements IRegiao {
    nome: string;
    valor: number;
    cor: string;
    coordenadas: ICoordenada[];

    public static ofEmpty(): IRegiao {
        const regiao = new Regiao();
        regiao.nome = '';
        regiao.valor = 0;
        regiao.cor = '';
        regiao.coordenadas = [];
        return regiao;
    }
}
export interface IItem {
    nome: string;
    valor: number;
}
export interface ICoordenada {
    x: number;
    y: number;
}
export interface IFoco {
    coordenada: ICoordenada;
    zoom: number;
}

export interface IForma {
    nome: string;
    coordenadas: ICoordenada[];
}
export interface IMapa extends IIndicador {
    regioes: IRegiao[];
    max: number;
}


export class Mapa extends Indicador implements IMapa {
    regioes: IRegiao[];
    max: number;

    constructor(regioes: IRegiao[], id: string, titulo: string, descricao: string,
                autor: string, criacao: number, fonte: string, metrica: string,
                dimensao: string, series: ISerie[], max: number, agregacao: TipoAgregacao, tipo: TipoIndicador) {
        super(id, titulo, descricao, autor, fonte, dimensao, metrica, agregacao, tipo, criacao);
        this.regioes = regioes;
        this.max = max;
    }
    public static fromResource(resource: IMapa) {
        const mapa = new Mapa(resource.regioes, null, null, null, null, null, null, null, null, null, resource.max, null, null);
        return mapa;
          }

}
