import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Region} from "../interface/region";
import {environment} from "../../../environments/environment";
import {Image} from "../interface/image";
import {MachineType} from "../interface/machine-type";
import {MachineTypeDatabase} from "../interface/machine-type-database";

@Injectable({
  providedIn: 'root'
})
export class GcpService {

  constructor(private http: HttpClient) { }

  getRegionComputeEngine(){
    return this.http.get<Region[]>(`${environment.apiBaseUrl}/gcp/compute-engine/region`);
  }

  getImage(){
    return this.http.get<Image[]>(`${environment.apiBaseUrl}/gcp/image`);
  }

  getMachineType(){
    return this.http.get<MachineType[]>(`${environment.apiBaseUrl}/gcp/compute-engine/machine-type`);
  }

  getMachineTypeDatabase(){
    return this.http.get<MachineTypeDatabase[]>(`${environment.apiBaseUrl}/gcp/cloud-sql/machine-type`);
  }
}
