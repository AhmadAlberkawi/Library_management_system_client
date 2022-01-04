import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../_models/admin';
import { AdminL } from '../_models/AdminL';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'https://localhost:5001/Bvs_Api/';

  private currentAdminSource = new BehaviorSubject<Admin>(null);
  currentAdmin$ = this.currentAdminSource.asObservable();

  admins: Array<AdminL>;

  constructor(private http: HttpClient) { }

  getAdmins() {
    return this.http.get(this.baseUrl + 'admin').pipe(
      map((Response: Array<AdminL>) => {
        this.admins = Response;
      })
    );
  }

  adminRegister(model: any) {
    return this.http.post(this.baseUrl + 'admin/addAdmin', model);
  }

  editAdmin(model: any) {
    return this.http.put(this.baseUrl + 'admin/editAdmin', model).pipe(
      map((response: Admin) => {
        const admin = response;

        if (admin) {
          localStorage.setItem('admin', JSON.stringify(admin));
          this.currentAdminSource.next(admin);
        }
      })
    );
  }

  deleteAdmin(id: number) {
    return this.http.delete(this.baseUrl + 'admin/' + id.toString());
  }

  changePassword(model: any) {
    return this.http.put(this.baseUrl + 'admin/changePassword', model);
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'admin/login', model).pipe(
      map((response: Admin) => {
        const admin = response;

        if (admin) {
          localStorage.setItem('admin', JSON.stringify(admin));
          this.currentAdminSource.next(admin);
        }
      })
    );
  }

  setCurrentAdmin(admin: Admin) {
    this.currentAdminSource.next(admin);
  }

  logout() {
    localStorage.removeItem('admin');
    this.currentAdminSource.next(null);
  }
}
