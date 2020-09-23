import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncesGridComponent } from './announces-grid.component';

describe('AnnouncesGridComponent', () => {
  let component: AnnouncesGridComponent;
  let fixture: ComponentFixture<AnnouncesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
