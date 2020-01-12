import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { User } from "../models/User";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  changePassword(password: string): boolean {
    throw new Error("Method not implemented.");
    return true;
  }

  constructor(private httpClient: HttpClient) {}

  // authenticate(username, password) {
  //   const headers = new HttpHeaders(
  //       {Authorization: 'Basic ' + btoa(username + ':' + password)});
  //   return this.httpClient
  //       .get<User>('http://localhost:8080/user/validateLogin', {headers})
  //       .pipe(map(userData => {
  //         sessionStorage.setItem('username', username);
  //         let authString = 'Basic ' + btoa(username + ':' + password);
  //         sessionStorage.setItem('basicauth', authString);
  //         return userData;
  //       }));
  // }

  authenticate(username, password) {
    return this.httpClient
      .post<any>("http://localhost:8080/authenticate", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  register(username, password: string) {
    return this.httpClient
      .post<any>("http://localhost:8080/register", { username, password })
      .pipe(
        map(userData => {
          return userData.username;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}
