import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChangePasswordComponent } from "./components/auth/change-password/change-password.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { LogoutComponent } from "./components/auth/logout/logout.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { DashboardsComponent } from "./components/core/dashboards/dashboards.component";
import { AddDeviceComponent } from "./components/core/devices/add-device/add-device.component";
import { DeviceComponent } from "./components/core/devices/device/device.component";
import { DevicesComponent } from "./components/core/devices/devices.component";
import { ListDevicesComponent } from "./components/core/devices/list-devices/list-devices.component";
import { HomeComponent } from "./components/layout/home/home.component";
import { NavbarComponent } from "./components/layout/navbar/navbar.component";
import { NotFoundComponent } from "./components/layout/not-found/not-found.component";
import { SidenavComponent } from "./components/layout/sidenav/sidenav.component";
import { AuthGaurdService } from "./services/auth-gaurd.service";
import { AuthHttpInterceptorService } from "./services/auth-http-interceptor.service";
import { AuthenticationService } from "./services/authentication.service";
// Services
import { DeviceService } from "./services/device.service";
import { HttpClientService } from "./services/http-client.service";
import { StatsComponent } from "./components/core/stats/stats.component";
import { LayoutService } from "./services/layout.service";
import { SwitchComponent } from "./components/core/widgets/switch/switch.component";
import { GuageComponent } from "./components/core/widgets/guage/guage.component";
import { ChartComponent } from "./components/core/widgets/chart/chart.component";
import { ReadingComponent } from "./components/core/widgets/reading/reading.component";
import { SocialLoginComponent } from "./components/auth/social-login/social-login.component";
// Social Login
import { SocialLoginModule } from "angularx-social-login";
import {
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "200802725189-eg42ov83u9fch748jp5sfcg4gf29pl10.apps.googleusercontent.com"
    )
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2533623390096460")
  }
]);

export function provideConfig() {
  return config;
}

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
    DeviceComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    LogoutComponent,
    StatsComponent,
    SwitchComponent,
    GuageComponent,
    ChartComponent,
    ReadingComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  providers: [
    DeviceService,
    AuthenticationService,
    AuthGaurdService,
    HttpClientService,
    LayoutService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptorService,
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
