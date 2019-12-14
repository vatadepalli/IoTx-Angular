import { Component, OnInit } from "@angular/core";
import { Device } from "../../../../models/Device";

import { DeviceService } from "../../../../services/device.service";

@Component({
  selector: "app-list-devices",
  templateUrl: "./list-devices.component.html",
  styleUrls: ["./list-devices.component.css"]
})
export class ListDevicesComponent implements OnInit {
  devices: Device[];

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.deviceService.getDeviceList().subscribe(devices => {
      console.log(devices);
      this.devices = devices;
    });
  }
}
