import { TestBed } from '@angular/core/testing';

import { StudentenService } from './studenten.service';

describe('StudentenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentenService = TestBed.get(StudentenService);
    expect(service).toBeTruthy();
  });
});
