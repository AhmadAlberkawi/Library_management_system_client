import { Component, OnInit } from '@angular/core';
import { Admin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  userLastName = 'Ahmad';

  loggedIn: boolean;

  superAdmin: boolean = true;

  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    this.getCurrentAdmin();
    if (!this.adminservice.loggedIn) {

    }
  }





  logout() {
    this.adminservice.logout();
    this.adminservice.loggedIn = false;
  }


  getCurrentAdmin() {
    this.adminservice.currentAdmin$.subscribe(admin => {
      this.adminservice.loggedIn = !!admin;
    }, error => {
      console.log(error)
    });
  }

}
