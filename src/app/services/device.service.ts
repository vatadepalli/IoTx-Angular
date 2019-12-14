import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Device } from "../models/Device";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DeviceService {
  deviceUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl);
  }
}
