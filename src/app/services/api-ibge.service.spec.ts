import { TestBed } from '@angular/core/testing';

import { ApiIbgeService } from './api-ibge.service';

describe('ApiIbgeService', () => {
  let service: ApiIbgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIbgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
