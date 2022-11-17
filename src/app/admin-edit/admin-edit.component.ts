import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminEdit } from '../_models/AdminEdit';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;

  model = {} as AdminEdit;

  constructor(public adminService: AdminService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const admin: AdminEdit = JSON.parse(localStorage.getItem('admin'));

    if (admin) {
      this.model = admin;
    }
  }

  editAdmin() {
    this.adminService.editAdmin(this.model).subscribe(
      response => {
        console.log(response);
        this.editForm.reset(this.model);
        this.model.password = null;
        this.toastr.success("Erfolgreich geändert");
      }
    )
  }

}
