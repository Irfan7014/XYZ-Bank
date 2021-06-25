import { TestBed } from '@angular/core/testing';

import { AcctransactionsService } from './acctransactions.service';

describe('AcctransactionsService', () => {
  let service: AcctransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcctransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
