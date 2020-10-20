import { TestBed } from '@angular/core/testing';

import { IosStoreDataService } from './ios-store-data.service';

describe('IosStoreDataService', () => {
  let service: IosStoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IosStoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
