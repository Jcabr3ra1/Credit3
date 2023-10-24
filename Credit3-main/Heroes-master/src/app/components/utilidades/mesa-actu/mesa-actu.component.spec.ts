import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaActuComponent } from './mesa-actu.component';

describe('MesaActuComponent', () => {
  let component: MesaActuComponent;
  let fixture: ComponentFixture<MesaActuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaActuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesaActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
