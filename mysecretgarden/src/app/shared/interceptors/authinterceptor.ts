// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class Authinterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const userToken = localStorage.getItem('token');
//     const modifiedReq = req.clone({
//       headers: req.headers.set('Authorization', `${userToken}`)
//     });
//     return next.handle(modifiedReq);
// }
// }
