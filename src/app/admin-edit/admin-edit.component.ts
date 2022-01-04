import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  model: any = {};

  constructor(public adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    const admin: Admin = JSON.parse(localStorage.getItem('admin'));

    if (admin) {
      this.model.username = admin.username;
      this.model.name = admin.name;
      this.model.email = admin.email;
      this.model.vorname = admin.vorname;
      this.model.rolle = admin.rolle;
    }
  }

  editAdmin() {
    this.adminService.editAdmin(this.model).subscribe(
      response => {
        console.log(response);
        this.toastr.success("Erfolgreich geändert")
      }
    )
  }


}
