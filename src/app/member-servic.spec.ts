import { TestBed } from '@angular/core/testing';

import { MemberServic } from './member-servic';

describe('MemberServic', () => {
  let service: MemberServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
