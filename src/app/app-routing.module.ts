import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChangePasswordComponent} from './components/auth/change-password/change-password.component';
import {LoginComponent} from './components/auth/login/login.component';
import {LogoutComponent} from './components/auth/logout/logout.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {AddDeviceComponent} from './components/core/devices/add-device/add-device.component';
import {DeviceComponent} from './components/core/devices/device/device.component';
import {DevicesComponent} from './components/core/devices/devices.component';
import {HomeComponent} from './components/layout/home/home.component';
import {NotFoundComponent} from './components/layout/not-found/not-found.component';

// Auth Gaurd
import {AuthGaurdService} from './services/auth-gaurd.service';

const routes: Routes = [
  {path: '', component: HomeComponent}, {
    path: 'devices',
    component: DevicesComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'add-device',
    component: AddDeviceComponent,
    canActivate: [AuthGaurdService]
  },
  {path: 'device', component: DeviceComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'register', component: RegisterComponent}, {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGaurdService]
  },
  {path: '**', component: NotFoundComponent, canActivate: [AuthGaurdService]}
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
