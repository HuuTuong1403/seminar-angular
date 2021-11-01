import { TestBed } from '@angular/core/testing';

import { NameServiceService } from './name-service.service';

describe('NameServiceService', () => {
  let service: NameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
