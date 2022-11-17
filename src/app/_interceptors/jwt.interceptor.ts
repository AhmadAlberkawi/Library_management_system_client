import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminService } from '../_services/admin.service';
import { Admin } from '../_models/admin';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private adminService: AdminService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let currentAdmin: Admin;

    this.adminService.currentAdmin$.pipe(take(1)).subscribe(admin => currentAdmin = admin);

    if (currentAdmin) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentAdmin.token}`
        }
      })
    }

    return next.handle(request);
  }
}
