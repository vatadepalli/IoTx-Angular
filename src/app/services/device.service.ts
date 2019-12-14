import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Device } from "../models/Device";
import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DeviceService {
  deviceUrl: string = environment.backendurl;

  constructor(private http: HttpClient) {}

  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl);
  }
}
