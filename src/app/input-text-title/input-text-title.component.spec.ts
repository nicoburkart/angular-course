import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextTitleComponent } from './input-text-title.component';

describe('InputTextTitleComponent', () => {
  let component: InputTextTitleComponent;
  let fixture: ComponentFixture<InputTextTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
