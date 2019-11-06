import { TestBed } from '@angular/core/testing';

import { IpServiceService } from './ip-service.service';

describe('IpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpServiceService = TestBed.get(IpServiceService);
    expect(service).toBeTruthy();
  });
});
