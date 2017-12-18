import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarrosComponent } from './lista-carros.component';

describe('ListaCarrosComponent', () => {
  let component: ListaCarrosComponent;
  let fixture: ComponentFixture<ListaCarrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCarrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
