import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintGraficoComponent } from './print-grafico.component';

describe('PrintGraficoComponent', () => {
  let component: PrintGraficoComponent;
  let fixture: ComponentFixture<PrintGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
