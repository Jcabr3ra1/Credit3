import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioActuComponent } from './usuario-actu.component';

describe('UsuarioActuComponent', () => {
  let component: UsuarioActuComponent;
  let fixture: ComponentFixture<UsuarioActuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioActuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
