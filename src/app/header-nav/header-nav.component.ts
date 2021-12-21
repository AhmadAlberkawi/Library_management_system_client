import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  userLastName :string;

  currentAdmin$: Observable<Admin>;

  superAdmin: boolean = true;

  constructor(public adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.currentAdmin$ = this.adminservice.currentAdmin$;

    if (!this.currentAdmin$) {
      this.router.navigateByUrl('/');
    }
    else {
      const admin: Admin = JSON.parse(localStorage.getItem('admin'));
      this.userLastName = admin.name;
    }
  }

  logout() {
    this.adminservice.logout();
    this.router.navigateByUrl('/');
  }
}
