import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessibilidadeDialogComponent } from './acessibilidade-dialog.component';

describe('AcessibilidadeDialogComponent', () => {
  let component: AcessibilidadeDialogComponent;
  let fixture: ComponentFixture<AcessibilidadeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessibilidadeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessibilidadeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
