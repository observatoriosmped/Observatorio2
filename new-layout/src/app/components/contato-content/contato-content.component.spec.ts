import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoContentComponent } from './contato-content.component';

describe('ContatoContentComponent', () => {
  let component: ContatoContentComponent;
  let fixture: ComponentFixture<ContatoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
