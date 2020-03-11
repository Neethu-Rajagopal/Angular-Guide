import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightHoverComponent } from './highlight-hover.component';

describe('HighlightHoverComponent', () => {
  let component: HighlightHoverComponent;
  let fixture: ComponentFixture<HighlightHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
