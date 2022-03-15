import { TestBed } from '@angular/core/testing';

import { CustomPreLoadService } from './custom-pre-load.service';

describe('CustomPreLoadService', () => {
  let service: CustomPreLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
