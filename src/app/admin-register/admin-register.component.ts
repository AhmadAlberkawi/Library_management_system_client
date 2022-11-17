import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(public adminservice: AdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  adminRegister() {
    this.adminservice.adminRegister(this.model).subscribe(Response => {
      console.log(Response);
      this.router.navigateByUrl('/admin-page');
      this.toastr.success('Admin wurde erfolgreich hinzugefügt');
      //location.reload();
    },
      error => {
        console.log(error);
      }
    )
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
