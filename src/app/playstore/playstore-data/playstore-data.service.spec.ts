import { TestBed } from '@angular/core/testing';

import { PlaystoreDataService } from './playstore-data.service';

describe('PlaystoreDataService', () => {
  let service: PlaystoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaystoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
