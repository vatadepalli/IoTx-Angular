import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthHttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if (sessionStorage.getItem('username') &&
    //     sessionStorage.getItem('basicauth')) {
    //   req = req.clone(
    //       {setHeaders: {Authorization: sessionStorage.getItem('basicauth')}})
    // }

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone(
          {setHeaders: {Authorization: sessionStorage.getItem('token')}});
    }

    return next.handle(req);
  }
}
