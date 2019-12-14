import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DevicesComponent } from "./components/core/devices/devices.component";
import { AddDeviceComponent } from "./components/core/devices/add-device/add-device.component";
import { DeviceComponent } from "./components/core/devices/device/device.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "devices", component: DevicesComponent },
  { path: "add-device", component: AddDeviceComponent },
  { path: "device", component: DeviceComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
