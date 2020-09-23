import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposeAnnonceComponent } from './depose-annonce.component';

describe('DeposeAnnonceComponent', () => {
  let component: DeposeAnnonceComponent;
  let fixture: ComponentFixture<DeposeAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeposeAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposeAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
