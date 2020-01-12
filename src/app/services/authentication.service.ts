import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {User} from '../models/User';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  authenticate(username, password) {
    const headers = new HttpHeaders(
        {Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient
        .get<User>('http://localhost:8080/user/validateLogin', {headers})
        .pipe(map(userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }));
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
