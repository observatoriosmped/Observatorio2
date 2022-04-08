import { IIndicador } from './indicador.model';

export interface ITemplate {
    valor: number;
    viewValue: string;
    widgets: IWidget[];
}
export interface IWidget {
    placement: number;
    indicador: IIndicador;
}
export class Template implements ITemplate {
    valor: number;
    viewValue: string;
    widgets: IWidget[];

    public static template() {
      return {
        valor: 1,
        viewValue: 'Template 1',
        widgets: [
          { placement: 1, indicador: undefined}
        ]
      };
    }

    public static templates() {

      return [
                { valor: 1, viewValue: 'Template 1', widgets: [
                  { placement: 1, indicador: undefined}
                ] },
                { valor: 2, viewValue: 'Template 2', widgets: [
                  { placement: 1, indicador: undefined},
                  { placement: 2, indicador: undefined}
                ] },
                { valor: 3, viewValue: 'Template 3', widgets: [
                  { placement: 1, indicador: undefined},
                  { placement: 2, indicador: undefined},
                  { placement: 3, indicador: undefined}
                ] },
                { valor: 4, viewValue: 'Template 4', widgets: [
                  { placement: 1, indicador: undefined},
                  { placement: 2, indicador: undefined},
                  { placement: 3, indicador: undefined},
                  { placement: 4, indicador: undefined}
                ] }
              ];
    }
}
