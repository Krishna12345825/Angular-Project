import { TestBed } from '@angular/core/testing';

import { LoginLogoutService } from './login-logout.service';

describe('LoginLogoutService', () => {
  let service: LoginLogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
