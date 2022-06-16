import { TestBed } from '@angular/core/testing';

import { DeliverUpdateValueService } from './deliver-update-value.service';

describe('DeliverUpdateValueService', () => {
  let service: DeliverUpdateValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverUpdateValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
