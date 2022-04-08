import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaServicosComponent } from './mapa-servicos.component';

describe('MapaServicosComponent', () => {
  let component: MapaServicosComponent;
  let fixture: ComponentFixture<MapaServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
