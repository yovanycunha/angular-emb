import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroComponent } from './cadastra-carros.component';

describe('CarroComponent', () => {
  let component: CarroComponent;
  let fixture: ComponentFixture<CarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
