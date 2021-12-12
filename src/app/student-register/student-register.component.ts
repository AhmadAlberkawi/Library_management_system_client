import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public studentservice: StudentService, private router: Router) { }

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
      this.studentservice.addStudent(this.model).subscribe(error => {
        console.log(error);
      });
    }
    else {
      this.studentservice.editStudent(this.model).subscribe(error => {
        console.log(error);
      });
    }
    this.cancelRegister.emit(false);
    location.reload();
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
