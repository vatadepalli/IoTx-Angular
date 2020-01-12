import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChangePasswordComponent} from './components/auth/change-password/change-password.component';
import {LoginComponent} from './components/auth/login/login.component';
import {LogoutComponent} from './components/auth/logout/logout.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {DashboardsComponent} from './components/core/dashboards/dashboards.component';
import {AddDeviceComponent} from './components/core/devices/add-device/add-device.component';
import {DeviceComponent} from './components/core/devices/device/device.component';
import {DevicesComponent} from './components/core/devices/devices.component';
import {ListDevicesComponent} from './components/core/devices/list-devices/list-devices.component';
import {HomeComponent} from './components/layout/home/home.component';
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {NotFoundComponent} from './components/layout/not-found/not-found.component';
import {SidenavComponent} from './components/layout/sidenav/sidenav.component';
import {AuthGaurdService} from './services/auth-gaurd.service';
import {AuthHttpInterceptorService} from './services/auth-http-interceptor.service';
import {AuthenticationService} from './services/authentication.service';
// Services
import {DeviceService} from './services/device.service';
import {HttpClientService} from './services/http-client.service';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, NotFoundComponent,
    SidenavComponent, DevicesComponent, DashboardsComponent, AddDeviceComponent,
    ListDevicesComponent, DeviceComponent, LoginComponent, RegisterComponent,
    ChangePasswordComponent, LogoutComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    DeviceService, AuthenticationService, AuthGaurdService, HttpClientService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
