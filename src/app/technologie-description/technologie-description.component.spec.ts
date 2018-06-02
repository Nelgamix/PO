import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieDescriptionComponent } from './technologie-description.component';

describe('TechnologieDescriptionComponent', () => {
  let component: TechnologieDescriptionComponent;
  let fixture: ComponentFixture<TechnologieDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologieDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologieDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
