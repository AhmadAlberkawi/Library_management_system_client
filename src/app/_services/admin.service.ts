import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../_models/admin';
import { AdminL } from '../_models/AdminL';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'https://localhost:5001/Bvs_Api/';

  private currentAdminSource = new ReplaySubject<Admin>(1);
  currentAdmin$ = this.currentAdminSource.asObservable();

  admins: Array<AdminL>;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'admin/login', model).pipe(
      map((response: Admin) => { const admin = response;

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

  adminRegister(model: any) {
    return this.http.post(this.baseUrl + 'admin/addAdmin', model);
  }

  getAdmins() {
    return this.http.get(this.baseUrl + 'admin').pipe(
      map((Response: Array<AdminL>) => { this.admins = Response;})
    );
  }

  deleteAdmin(id: number) {
    return this.http.delete(this.baseUrl + 'admin/' + id.toString());
  }
}
