import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncesDetailsBoutiquecardComponent } from './announces-details-boutiquecard.component';

describe('AnnouncesDetailsBoutiquecardComponent', () => {
  let component: AnnouncesDetailsBoutiquecardComponent;
  let fixture: ComponentFixture<AnnouncesDetailsBoutiquecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncesDetailsBoutiquecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncesDetailsBoutiquecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
