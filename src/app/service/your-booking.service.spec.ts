import { TestBed } from '@angular/core/testing';

import { YourBookingService } from './your-booking.service';

describe('YourBookingService', () => {
  let service: YourBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
