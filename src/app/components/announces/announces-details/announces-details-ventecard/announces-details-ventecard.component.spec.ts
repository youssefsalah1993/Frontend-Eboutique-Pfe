import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncesDetailsVentecardComponent } from './announces-details-ventecard.component';

describe('AnnouncesDetailsVentecardComponent', () => {
  let component: AnnouncesDetailsVentecardComponent;
  let fixture: ComponentFixture<AnnouncesDetailsVentecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncesDetailsVentecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncesDetailsVentecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
