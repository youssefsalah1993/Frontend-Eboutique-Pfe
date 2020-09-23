import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCategoriePopulComponent } from './welcome-categorie-popul.component';

describe('WelcomeCategoriePopulComponent', () => {
  let component: WelcomeCategoriePopulComponent;
  let fixture: ComponentFixture<WelcomeCategoriePopulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeCategoriePopulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCategoriePopulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
