import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Region} from "../interface/region";
import {environment} from "../../../environments/environment";
import {Image} from "../interface/image";
import {MachineType} from "../interface/machine-type";

@Injectable({
  providedIn: 'root'
})
export class GcpService {

  constructor(private http: HttpClient) { }

  getRegion(){
    return this.http.get<Region[]>(`${environment.apiBaseUrl}/gcp/region`);
  }

  getImage(){
    return this.http.get<Image[]>(`${environment.apiBaseUrl}/gcp/image`);
  }

  getMachineType(){
    return this.http.get<MachineType[]>(`${environment.apiBaseUrl}/gcp/compute-engine/machine-type`);
  }
}
