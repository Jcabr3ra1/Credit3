import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoCrearComponent } from './partido-crear.component';

describe('PartidoCrearComponent', () => {
  let component: PartidoCrearComponent;
  let fixture: ComponentFixture<PartidoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidoCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
