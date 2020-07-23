import { TestBed } from '@angular/core/testing';

import { AutinterceptorInterceptor } from './autinterceptor.interceptor';

describe('AutinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutinterceptorInterceptor = TestBed.inject(AutinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
