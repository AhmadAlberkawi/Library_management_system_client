import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentL } from '../_models/StudentL';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  @Input() studentfromList: StudentL;
  @Input() isregister: boolean;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(public studentservice: StudentService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (!this.isregister) {
      this.model.id = this.studentfromList.id;
      this.model.name = this.studentfromList.name;
      this.model.vorname = this.studentfromList.vorname;
      this.model.email = this.studentfromList.email;
      this.model.matrikelNum = this.studentfromList.matrikelNum;
      this.model.bibNum = this.studentfromList.bibNum;
    }
  }

  addOrEditStudent() {

    if (this.isregister) {
      this.studentservice.addStudent(this.model).subscribe(
        response => { console.log(response); },
        error => {
          console.log(error);
          this.toastr.error(error.error);
      });
    }
    else {
      this.studentservice.editStudent(this.model).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
          this.toastr.error(error.error);
      });
    }
    this.cancelRegister.emit(false);
    location.reload();
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
