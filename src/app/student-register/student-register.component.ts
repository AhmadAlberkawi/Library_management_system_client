import { Component, Input, OnInit } from '@angular/core';
import { StudentL } from '../_models/StudentL';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  @Input() studentfromList: StudentL;
  model: any = {};

  constructor(public studentservice: StudentService) { }

  ngOnInit(): void {
    if (this.studentfromList) {
      this.model.id = this.studentfromList.id;
      this.model.name = this.studentfromList.name;
      this.model.vorname = this.studentfromList.vorname;
      this.model.email = this.studentfromList.email;
      this.model.matrikelNum = this.studentfromList.matrikelNum;
      this.model.bibNum = this.studentfromList.bibNum;
    }
  }

  addOrEditStudent() {

    if (this.studentfromList == null) {
      this.studentservice.addStudent(this.model).subscribe(error => {
        console.log(error);
      });
    }
    else {
      this.studentservice.editStudent(this.model).subscribe(error => {
        console.log(error);
      });
    }
  }

  cancel() {

  }
}
