import { Component, OnInit } from '@angular/core';
import { Admin } from './_models/admin';
import { AdminService } from './_services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = '';

  model: any = {};

  constructor(public adminservice: AdminService) { }

  ngOnInit(): void {
    this.setCurrentAdmin();
  }

  setCurrentAdmin() {
    const admin: Admin = JSON.parse(localStorage.getItem('admin'));
    if (admin) {
      this.adminservice.setCurrentAdmin(admin);
    }
  }

  login() {
    this.adminservice.login(this.model).subscribe(Response => {
      console.log(Response);
      this.adminservice.logedIn = true;
    },
      error => {
        console.log(error);
      }
    )
  }
}

