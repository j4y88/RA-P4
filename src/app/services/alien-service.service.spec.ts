import { TestBed, inject } from '@angular/core/testing';

import { AlienServiceService } from './alien-service.service';

describe('AlienServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlienServiceService]
    });
  });

  it('should ...', inject([AlienServiceService], (service: AlienServiceService) => {
    expect(service).toBeTruthy();
  }));
});
