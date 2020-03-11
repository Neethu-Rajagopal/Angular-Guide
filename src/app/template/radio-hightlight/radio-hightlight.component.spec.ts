import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioHightlightComponent } from './radio-hightlight.component';

describe('RadioHightlightComponent', () => {
  let component: RadioHightlightComponent;
  let fixture: ComponentFixture<RadioHightlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioHightlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioHightlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
