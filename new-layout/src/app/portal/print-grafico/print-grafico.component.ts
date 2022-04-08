import { Observable, Subscription, interval } from 'rxjs';
import { Component, OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { TipoIndicador } from '../models/indicador.model';
import { v4 as uuid } from 'uuid';

export interface Registro {
    valor: number;
    nome: string;
}
interface Package {
    eixo_x: any;
    eixo_y: any;
}

@Component({
  selector: 'app-print-grafico',
  templateUrl: './print-grafico.component.html',
  styleUrls: ['./print-grafico.component.scss']
})
export class PrintGraficoComponent implements OnInit {

  @Input()
    private dataSet$: Observable<any[]>;

    @Input()
    public tipo: TipoIndicador;

    @Input()
    public titulo: string;

    @Input()
    public descricao: string;

    public id: string;

    public xCategoria = true;

    public categoriaArray: any[] = ['x'];

    public chart: c3.ChartAPI;

    public dataSetHolder: Array<any> = [];

    private resizeSubscription: Subscription;

    public informacao = false;

    constructor() { }


    ngOnInit() {
        this.id = uuid();
    }

    private separaDados(data: Array<Registro>, id: string, pacote: Package) {
        const x: Array<any> = [id + '_x'];
        const y: Array<any> = [id];
        data.forEach(item => {
            x.push(item.nome);
            y.push(item.valor);
        });
        pacote.eixo_x = x;
        pacote.eixo_y = y;
        return pacote;
    }

    private loadData(pacote: Package) {
        if (this.xCategoria === true) {
            const arrayToAdd = pacote.eixo_x.slice(1);
            this.categoriaArray.push(...arrayToAdd);
            this.chart.load({
                columns: [
                this.categoriaArray,
                pacote.eixo_y
                ]
            });
        } else {
            const x = '' + pacote.eixo_x[0];
            const y = '' + pacote.eixo_y[0];
            const xsc = {};
            xsc[y] = x;
            this.chart.load({
                xs: xsc,
                columns: [
                pacote.eixo_x,
                pacote.eixo_y
                ]
            });
        }
    }

    async ngAfterViewInit() {
        const config: c3.ChartConfiguration = {
            bindto: '#chart-' + this.id,
            data: {
                columns: [],
                xFormat: '%H:%M:%S',
                type: this.tipo
            },
            padding: {
                right: 20,
                bottom: 20,
            },
            point: {
                show: false
            },
            transition: {
                duration: 500
            }
        };

        if (this.xCategoria === true) {
            config.data.x = 'x';
            config.axis = {
                x: {
                    type: 'category'
                }
            };
        } else {
            config.data.xs = {};
        }

        switch (this.tipo) {
            case TipoIndicador.BARRAS:
                config.legend = {
                    show: false
                };
                break;
            default:
                break;
        }

        this.chart = c3.generate(config);

        this.chart.resize();

        this.dataSet$.subscribe(data => {
            data.forEach(array => {
                const dataNoId = Object.assign([], array);
                const id = array[0];
                dataNoId.shift();
                let pacote: Package = { eixo_x: [], eixo_y: [] };
                if (this.dataSetHolder.length === 0) {
                    pacote = this.separaDados(dataNoId, id, pacote);
                    this.loadData(pacote);
                } else {
                    this.dataSetHolder.forEach(arrayHolder => {
                        if (id === arrayHolder[0]) {
                            const length = Object.keys(arrayHolder).length;
                            if (array.length > length) {
                                pacote = this.separaDados(dataNoId, id, pacote);
                                this.loadData(pacote);
                            }
                        }
                    });
                }
            });
            this.dataSetHolder = [];
            data.forEach(dataItem => this.dataSetHolder.push({... dataItem}));
        });
        this.resizeSubscription = interval(1000).subscribe(() => this.chart.resize());
    }

    abrirInfo(){
        this.informacao = !this.informacao;
    }

    onKeyPressInfo(e){
        if(e.keyCode == 13){
            this.abrirInfo();
        }
    }

    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }

}
