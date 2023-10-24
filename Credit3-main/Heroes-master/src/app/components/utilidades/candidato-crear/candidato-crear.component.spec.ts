import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoCrearComponent } from './candidato-crear.component';

describe('CandidatoCrearComponent', () => {
  let component: CandidatoCrearComponent;
  let fixture: ComponentFixture<CandidatoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
