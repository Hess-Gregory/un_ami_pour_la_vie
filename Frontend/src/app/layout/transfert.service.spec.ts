/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransfertService } from './transfert.service';

describe('Service: Transfert', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransfertService]
    });
  });

  it('should ...', inject([TransfertService], (service: TransfertService) => {
    expect(service).toBeTruthy();
  }));
});
