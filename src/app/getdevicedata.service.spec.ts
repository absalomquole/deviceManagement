import { TestBed, inject } from '@angular/core/testing';

import { GetdevicedataService } from './getdevicedata.service';

describe('GetdevicedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetdevicedataService]
    });
  });

  it('should ...', inject([GetdevicedataService], (service: GetdevicedataService) => {
    expect(service).toBeTruthy();
  }));
});
