import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/Forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { DevicesComponent } from './components/core/devices/devices.component';
import { DashboardsComponent } from './components/core/dashboards/dashboards.component';
import { AddDeviceComponent } from './components/core/devices/add-device/add-device.component';
import { ListDevicesComponent } from './components/core/devices/list-devices/list-devices.component';
import { DeviceComponent } from './components/core/devices/device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    SidenavComponent,
    DevicesComponent,
    DashboardsComponent,
    AddDeviceComponent,
    ListDevicesComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
