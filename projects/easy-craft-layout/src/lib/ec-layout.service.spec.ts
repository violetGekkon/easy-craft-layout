import { TestBed } from '@angular/core/testing';

import { EcLayoutService } from './ec-layout.service';

describe('EasyCraftLayoutService', () => {
  let service: EcLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
