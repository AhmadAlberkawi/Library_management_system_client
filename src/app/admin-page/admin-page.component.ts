import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AdminL } from '../_models/AdminL';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  registerFrom: boolean;

  idChoice: number;

  constructor(public adminservice: AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    this.adminservice.getAdmins().subscribe(
      error => {
        console.log(error);
      }
    );
  }

  deleteAdmin() {
    this.adminservice.deleteAdmin(this.idChoice).subscribe(error => {
      console.log(error);
    });
  }

  addAdmin() {
    this.registerFrom = true;
  }
}
