import { TestBed } from '@angular/core/testing';

import { TranslateListService } from './translate-list.service';

describe('TranslateListService', () => {
  let service: TranslateListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
