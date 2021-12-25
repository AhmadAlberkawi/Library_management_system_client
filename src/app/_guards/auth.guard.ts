import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminService } from '../_services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private adminService: AdminService, private toastr: ToastrService
    ,private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.adminService.currentAdmin$.pipe(
      map(admin => {
        if (admin) {
          return true;
        }
        else {
          this.router.navigateByUrl('/');
          this.toastr.error('Sie sind nicht angemeldet!');
        }
      })
    );
  }
}
