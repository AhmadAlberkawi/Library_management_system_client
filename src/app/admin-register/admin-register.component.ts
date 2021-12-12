import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(public adminservice: AdminService, private router: Router) { }

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
    location.reload();
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
