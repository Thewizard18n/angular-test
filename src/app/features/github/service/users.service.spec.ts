import { TestBed } from '@angular/core/testing';

import { githubRepositoryImp } from './users.service';

describe('UsersService', () => {
  let service: githubRepositoryImp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(githubRepositoryImp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
