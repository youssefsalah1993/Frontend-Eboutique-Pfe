import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeVillePopulComponent } from './welcome-ville-popul.component';

describe('WelcomeVillePopulComponent', () => {
  let component: WelcomeVillePopulComponent;
  let fixture: ComponentFixture<WelcomeVillePopulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeVillePopulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeVillePopulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
