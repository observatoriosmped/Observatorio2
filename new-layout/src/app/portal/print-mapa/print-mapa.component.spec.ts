import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMapaComponent } from './print-mapa.component';

describe('PrintMapaComponent', () => {
  let component: PrintMapaComponent;
  let fixture: ComponentFixture<PrintMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
