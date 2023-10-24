import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesActuComponent } from './roles-actu.component';

describe('RolesActuComponent', () => {
  let component: RolesActuComponent;
  let fixture: ComponentFixture<RolesActuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesActuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
