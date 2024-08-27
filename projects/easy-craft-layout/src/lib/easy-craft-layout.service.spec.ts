import { TestBed } from '@angular/core/testing';

import { EasyCraftLayoutService } from './easy-craft-layout.service';

describe('EasyCraftLayoutService', () => {
  let service: EasyCraftLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyCraftLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
