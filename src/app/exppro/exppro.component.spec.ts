import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpproComponent } from './exppro.component';

describe('ExpproComponent', () => {
  let component: ExpproComponent;
  let fixture: ComponentFixture<ExpproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
