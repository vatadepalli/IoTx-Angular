import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {Device} from '../models/Device';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class DeviceService {
  deviceUrl: string = environment.backendurl;

  constructor(private http: HttpClient) {}

  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl);
  }
}
