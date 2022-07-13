import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {History} from "../interface/history";
import {CreateHistoryRequest} from "../interface/create-history";

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  create(request: CreateHistoryRequest) : Observable<History>{
    return this.http.post<History>(`${environment.apiBaseUrl}/history`, request, {headers});
  }

  delete(id : number): Observable<History>{
    return this.http.delete<History>(`${environment.apiBaseUrl}/history/${id}`);
  }

  findOne(id : number): Observable<History>{
    return this.http.get<History>(`${environment.apiBaseUrl}/history/${id}`);
  }

  findAllByUserId(id : number){
    return this.http.get<History[]>(`${environment.apiBaseUrl}/history/userId/${id}`);
  }

}
