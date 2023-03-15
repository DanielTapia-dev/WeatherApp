import { TestBed } from '@angular/core/testing';

import { GoogleTranslateServiceService } from './google-translate-service.service';

describe('GoogleTranslateServiceService', () => {
  let service: GoogleTranslateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleTranslateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
