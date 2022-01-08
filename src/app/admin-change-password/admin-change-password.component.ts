import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {

  model: any = {};

  constructor(public adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    const admin: Admin = JSON.parse(localStorage.getItem('admin'));

    if (admin) {
      this.model.email = admin.email;
    }
  }

  changePassword() {
    this.adminService.changePassword(this.model).subscribe(
      response => {
        console.log(response);
        this.toastr.success("Passwort Erfolgreich geändert");
      }
    );
  }
}
