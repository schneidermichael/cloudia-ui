import { TestBed } from '@angular/core/testing';

import { AzureService } from './azure.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AzureService', () => {
  let service: AzureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule],
    });
    service = TestBed.inject(AzureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
