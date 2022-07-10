import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Region} from "../interface/region";
import {MachineImage} from "../interface/machine-image";
import {InstanceType} from "../interface/instance-type";
import {InstanceTypeDatabase} from "../interface/instance-type-database";

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor(private http: HttpClient) { }

  getRegionElasticCloudComputing(){
    return this.http.get<Region[]>(`${environment.apiBaseUrl}/aws/elastic-cloud-computing/region`);
  }

  getRegionRelationalDatabaseService(){
    return this.http.get<Region[]>(`${environment.apiBaseUrl}/aws/relational-database-service/region`);
  }

  getImage(){
    return this.http.get<MachineImage[]>(`${environment.apiBaseUrl}/aws/machine-image`);
  }

  getInstanceType(){
    return this.http.get<InstanceType[]>(`${environment.apiBaseUrl}/aws/elastic-cloud-computing/instance-type`);
  }

  getInstanceTypeDatabase(){
    return this.http.get<InstanceTypeDatabase[]>(`${environment.apiBaseUrl}/aws/relational-database-service/instance-type`);
  }

}
