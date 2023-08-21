import { TestBed } from '@angular/core/testing';

import { CoachesServices } from './coaches.service';

describe('CoachesService', () => {
  let service: CoachesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
