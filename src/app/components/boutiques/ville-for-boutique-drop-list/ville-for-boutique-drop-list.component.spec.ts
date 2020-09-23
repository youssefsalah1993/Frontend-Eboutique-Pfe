import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleForBoutiqueDropListComponent } from './ville-for-boutique-drop-list.component';

describe('VilleForBoutiqueDropListComponent', () => {
  let component: VilleForBoutiqueDropListComponent;
  let fixture: ComponentFixture<VilleForBoutiqueDropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleForBoutiqueDropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleForBoutiqueDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
