import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class mainInterceptorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept':'application/json'
    });
    req = req.clone({ headers });
    return handler.handle(req);
  }
}