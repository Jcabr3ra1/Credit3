import { TestBed } from '@angular/core/testing';

import { PermisosRolService } from './permisos-rol.service';

describe('PermisosRolService', () => {
  let service: PermisosRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisosRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
