import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveContentComponent } from './objective-content.component';

describe('ObjectiveContentComponent', () => {
  let component: ObjectiveContentComponent;
  let fixture: ComponentFixture<ObjectiveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectiveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
