import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncesDetailsComponent } from './announces-details.component';

describe('AnnouncesDetailsComponent', () => {
  let component: AnnouncesDetailsComponent;
  let fixture: ComponentFixture<AnnouncesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
