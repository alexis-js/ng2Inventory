import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailGuard } from './product-guard.service';

describe('ProductDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailGuard]
    });
  });

  it('should ...', inject([ProductDetailGuard], (guard: ProductDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
