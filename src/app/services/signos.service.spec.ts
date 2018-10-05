import { TestBed } from '@angular/core/testing';

import { SignosService } from './signos.service';

describe('SignosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignosService = TestBed.get(SignosService);
    expect(service).toBeTruthy();
  });
});
