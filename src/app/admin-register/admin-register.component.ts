import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  model: any = {};

  constructor(public adminservice: AdminService) { }

  ngOnInit(): void {
  }

  adminRegister() {
    this.adminservice.adminRegister(this.model).subscribe(Response => {
      console.log(Response)
    },
      error => {
        console.log(error);
      }
    )
  }

  cancel() {

  }
}
