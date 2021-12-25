import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  model: any = {};

  constructor(public adminservice: AdminService, private router: Router, private toastr: ToastrService) { }

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
    this.adminservice.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/overview');
    },
      error => {
        console.log(error);
        this.toastr.error(error.error);
      });
    }
}
