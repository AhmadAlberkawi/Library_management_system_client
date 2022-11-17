import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Admin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  admin: Admin;
  model: any = {};

  constructor(public adminService: AdminService, private toastr: ToastrService) {
    this.adminService.currentAdmin$.pipe(take(1)).subscribe(admin => this.admin = admin);
  }

  ngOnInit(): void {

    if (this.admin) {
      this.model.email = this.admin.email;
    }
  }

  changePassword() {
    this.adminService.changePassword(this.model).subscribe(
      response => {
        console.log(response);
        this.editForm.reset();
        this.toastr.success("Passwort Erfolgreich geändert");
      }
    );
  }
}
