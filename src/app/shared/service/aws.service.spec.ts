import { TestBed } from '@angular/core/testing';

import { AwsService } from './aws.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AwsService', () => {
  let service: AwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule],
    });
    service = TestBed.inject(AwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
