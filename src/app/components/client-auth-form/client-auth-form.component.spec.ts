import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAuthFormComponent } from './client-auth-form.component';

describe('ClientAuthFormComponent', () => {
  let component: ClientAuthFormComponent;
  let fixture: ComponentFixture<ClientAuthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAuthFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
