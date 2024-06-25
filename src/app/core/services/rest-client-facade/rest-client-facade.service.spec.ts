import { TestBed } from '@angular/core/testing';

import { RestClientFacadeService } from './rest-client-facade.service';

describe('RestClientFacadeService', () => {
  let service: RestClientFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestClientFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
