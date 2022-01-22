import { TestBed } from '@angular/core/testing';

import { SubirExcelService } from './subirExcelService';

describe('BaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubirExcelService = TestBed.get(SubirExcelService);
    expect(service).toBeTruthy();
  });
});
