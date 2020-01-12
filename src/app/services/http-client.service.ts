import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';


export class Employee {
  constructor(
      public empId: string,
      public name: string,
      public designation: string,
      public salary: string,
  ) {}
}
@Injectable({providedIn: 'root'})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}
}
