import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeUsersListComponent } from './type-users-list.component';

describe('TypeUsersListComponent', () => {
  let component: TypeUsersListComponent;
  let fixture: ComponentFixture<TypeUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
