import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquesDetailsCardComponent } from './boutiques-details-card.component';

describe('BoutiquesDetailsCardComponent', () => {
  let component: BoutiquesDetailsCardComponent;
  let fixture: ComponentFixture<BoutiquesDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiquesDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiquesDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
