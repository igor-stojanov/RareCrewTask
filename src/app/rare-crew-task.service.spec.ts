import { TestBed } from '@angular/core/testing';

import { RareCrewTaskService } from './rare-crew-task.service';

describe('RareCrewTaskService', () => {
  let service: RareCrewTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RareCrewTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
