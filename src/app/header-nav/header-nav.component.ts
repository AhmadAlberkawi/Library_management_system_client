import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  userLastName = 'Ahmad';

  currentAdmin$: Observable<Admin>;

  superAdmin: boolean = true;

  constructor(public adminservice: AdminService) { }

  ngOnInit(): void {
    this.currentAdmin$ = this.adminservice.currentAdmin$;

    if (!this.currentAdmin$) {
      // navigieren zu der ersten website
    }
  }

  logout() {
    this.adminservice.logout();
    this.adminservice.logedIn = false;
  }
}
