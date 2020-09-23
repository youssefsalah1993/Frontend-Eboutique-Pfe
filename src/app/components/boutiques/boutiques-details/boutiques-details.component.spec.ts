import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquesDetailsComponent } from './boutiques-details.component';

describe('BoutiquesDetailsComponent', () => {
  let component: BoutiquesDetailsComponent;
  let fixture: ComponentFixture<BoutiquesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiquesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiquesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
