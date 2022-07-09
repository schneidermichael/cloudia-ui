import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Region} from "../interface/region";
import {environment} from "../../../environments/environment";
import {InstanceSerie} from "../interface/instance-serie";
import {OperatingSystem} from "../interface/operating-system";

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  constructor(private http: HttpClient) { }

  getRegion(){
    return this.http.get<Region[]>(`${environment.apiBaseUrl}/azure/region`);
  }

  getOperatingSystem(){
    return this.http.get<OperatingSystem[]>(`${environment.apiBaseUrl}/azure/operating-system`);
  }

  getInstanceSerie(){
    return this.http.get<InstanceSerie[]>(`${environment.apiBaseUrl}/azure/virtual-machine/instance-serie`);
  }
}
