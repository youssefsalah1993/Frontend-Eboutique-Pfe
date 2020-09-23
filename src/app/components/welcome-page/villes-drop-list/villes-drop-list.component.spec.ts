import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillesDropListComponent } from './villes-drop-list.component';

describe('VillesDropListComponent', () => {
  let component: VillesDropListComponent;
  let fixture: ComponentFixture<VillesDropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillesDropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillesDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
