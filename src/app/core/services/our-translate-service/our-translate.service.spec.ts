import { TestBed } from '@angular/core/testing';

import { OurTranslateService } from './our-translate.service';

describe('OurTranslateService', () => {
  let service: OurTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
