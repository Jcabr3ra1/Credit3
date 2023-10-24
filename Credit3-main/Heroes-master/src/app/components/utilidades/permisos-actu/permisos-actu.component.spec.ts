import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosActuComponent } from './permisos-actu.component';

describe('PermisosActuComponent', () => {
  let component: PermisosActuComponent;
  let fixture: ComponentFixture<PermisosActuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosActuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisosActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
