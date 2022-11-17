import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Admin } from '../_models/admin';
import { AdminEdit } from '../_models/AdminEdit';
import { AdminL } from '../_models/AdminL';
import { OverviewService } from './overview.service';

//const httpOptions = {
//  headers: new HttpHeaders({
//    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('admin'))?.token
//  })
//}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.apiUrl;

  private currentAdminSource = new BehaviorSubject<Admin>(null);
  currentAdmin$ = this.currentAdminSource.asObservable();

  admins: AdminL[] = [];

  constructor(private http: HttpClient, private overviewService: OverviewService) { }

  getAdmins() {
    if (this.admins.length > 0) return of(this.admins);
    return this.http.get<AdminL[]>(this.baseUrl + 'admin').pipe(
      map(admins => {
        this.admins = admins;
        return admins;
      })
    );
  }

  //getAdmins() {
  //  return this.http.get(this.baseUrl + 'admin', /*httpOptions*/).pipe(
  //    map((Response: Array<AdminL>) => {
  //      this.admins = Response;
  //    })
  //  );
  //}

  adminRegister(model: any) {
    return this.http.post(this.baseUrl + 'admin/addAdmin', model).pipe(
      map((admin: AdminL) => {
        this.admins.push(admin);

        if (this.overviewService.overView) {
          this.overviewService.overView.anzahlAdmin++;
        }
      })
    );
  }

  editAdmin(model: AdminEdit) {

    return this.http.put(this.baseUrl + 'admin/editAdmin', model).pipe(
      map((response: Admin) => {

        const admin = response;      
        const id = (this.admins.find(x => x.email === admin.email)).id;

        const adminL: AdminL = {
          id: id,
          name: admin.name,
          vorname: admin.vorname,
          email: admin.email,
          rolle: admin.rolle,
          foto: admin.foto
        };

        const index = this.admins.findIndex(x => x.email === admin.email);
        this.admins[index] = adminL;

        if (admin) {
          localStorage.setItem('admin', JSON.stringify(admin));
          this.currentAdminSource.next(admin);
        }
      })
    );
  }

  deleteAdmin(id: number) {
    return this.http.delete(this.baseUrl + 'admin/' + id).pipe(
      map(() => {
        const index = this.admins.findIndex(x => x.id == id);
        this.admins.splice(index, 1);

        if (this.overviewService.overView) {
          this.overviewService.overView.anzahlAdmin--;
        }
      })
    );
  }

  changePassword(model: any) {
    return this.http.put(this.baseUrl + 'admin/changePassword', model).pipe(
      map((response: Admin) => {
        const admin = response;

        if (admin) {
          localStorage.setItem('admin', JSON.stringify(admin));
          this.currentAdminSource.next(admin);
        }
      })
    );
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
