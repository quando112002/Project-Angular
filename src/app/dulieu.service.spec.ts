import { TestBed } from '@angular/core/testing';

import { DulieuService } from './dulieu.service';

describe('DulieuService', () => {
  let service: DulieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DulieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
