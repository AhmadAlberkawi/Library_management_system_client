import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AdminL } from '../_models/AdminL';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  admins$: Observable<AdminL[]>;

  adminId: number;

  constructor(public adminservice: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.admins$ = this.adminservice.getAdmins();
  }

  //getAdmins() {
  //  this.adminservice.getAdmins().subscribe(admins => {
  //    this.admins = admins;
  //  });
  //}

  deleteAdmin() {

    if (typeof this.adminId !== 'undefined') {
      this.adminservice.deleteAdmin(this.adminId).subscribe(response => {
        this.toastr.success('Admin wurde erfolgreich gelöscht');
        console.log(response);
      });
    }
  }
   
}
