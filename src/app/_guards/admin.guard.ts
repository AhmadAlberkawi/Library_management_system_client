import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminService } from '../_services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private adminService: AdminService, private toastr: ToastrService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.adminService.currentAdmin$.pipe(
      map(admin => {
        if (admin) {
          if (admin.rolle !== 'Super Admin') {
            this.router.navigateByUrl('/overview');
            this.toastr.error('Sie sind kein Super Admin!');
            return false;
          }
          return true;
        }
        else {
          return true;
        }
      })
    );
  }
}
