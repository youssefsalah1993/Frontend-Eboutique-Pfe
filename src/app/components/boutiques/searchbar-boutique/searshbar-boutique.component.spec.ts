import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearshbarBoutiqueComponent } from './searshbar-boutique.component';

describe('SearshbarBoutiqueComponent', () => {
  let component: SearshbarBoutiqueComponent;
  let fixture: ComponentFixture<SearshbarBoutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearshbarBoutiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearshbarBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
