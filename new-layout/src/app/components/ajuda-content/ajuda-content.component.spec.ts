import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaContentComponent } from './ajuda-content.component';

describe('AjudaContentComponent', () => {
  let component: AjudaContentComponent;
  let fixture: ComponentFixture<AjudaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
