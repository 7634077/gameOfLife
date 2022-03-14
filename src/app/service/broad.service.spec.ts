import { TestBed } from '@angular/core/testing';

import { BroadService } from './broad.service';

describe('BroadService', () => {
  let service: BroadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
