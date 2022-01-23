import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminL } from '../_models/AdminL';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  admins: Array<AdminL>;

  registerFrom: boolean;

  idChoice: number;

  constructor(public adminservice: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    this.adminservice.getAdminss().subscribe(admins => {
      this.admins = admins;
    },
      error => {
        console.log(error);
      }
    );
  }

  deleteAdmin() {
    this.adminservice.deleteAdmin(this.idChoice).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
        this.toastr.error(error.error);
      });
    location.reload();
  }

  addAdmin() {
    this.registerFrom = true;
  }

  cancelRegisterMode(event: boolean) {
    this.registerFrom = event;
  }

}
