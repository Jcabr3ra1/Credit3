import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoActuComponent } from './candidato-actu.component';

describe('CandidatoActuComponent', () => {
  let component: CandidatoActuComponent;
  let fixture: ComponentFixture<CandidatoActuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoActuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
