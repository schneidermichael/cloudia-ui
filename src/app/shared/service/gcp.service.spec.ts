import { TestBed } from '@angular/core/testing';

import { GcpService } from './gcp.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('GcpService', () => {
  let service: GcpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule],
    });
    service = TestBed.inject(GcpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
