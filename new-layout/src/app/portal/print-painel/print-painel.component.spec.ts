import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPainelComponent } from './print-painel.component';

describe('PrintPainelComponent', () => {
  let component: PrintPainelComponent;
  let fixture: ComponentFixture<PrintPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
