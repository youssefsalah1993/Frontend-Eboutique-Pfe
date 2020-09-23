import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueGridComponent } from './boutique-grid.component';

describe('BoutiqueGridComponent', () => {
  let component: BoutiqueGridComponent;
  let fixture: ComponentFixture<BoutiqueGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiqueGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiqueGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
