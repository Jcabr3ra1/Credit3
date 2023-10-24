import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoActuComponent } from './partido-actu.component';

describe('PartidoActuComponent', () => {
  let component: PartidoActuComponent;
  let fixture: ComponentFixture<PartidoActuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidoActuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidoActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});