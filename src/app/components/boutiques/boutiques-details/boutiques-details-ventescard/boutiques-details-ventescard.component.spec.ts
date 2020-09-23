import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquesDetailsVentescardComponent } from './boutiques-details-ventescard.component';

describe('BoutiquesDetailsVentescardComponent', () => {
  let component: BoutiquesDetailsVentescardComponent;
  let fixture: ComponentFixture<BoutiquesDetailsVentescardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiquesDetailsVentescardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiquesDetailsVentescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
