import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../_models/student';
import { StudentL } from '../_models/StudentL';
import { StudentService } from '../_services/student.service';


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  registerFrom: boolean;
  register: boolean;
  idChoice: number;
  student: StudentL;

  constructor(public studentservice: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {

    this.studentservice.getStudents().subscribe(
      error => {
        console.log(error);
      }
    )
  }

  addStudent() {
    this.registerFrom = true;
    this.register = true;
  }

  editStudent() {
    this.student = this.studentservice.students.find(x => x.id == this.idChoice);
    this.registerFrom = true;
    this.register = false;
  }

  deleteStudent() {
    this.studentservice.deleteStudent(this.idChoice).subscribe(
      error => { console.log(error);}
    );

    location.reload();
  }

  cancelRegisterMode(event: boolean) {
    this.registerFrom = event;
    location.reload();
  }
}
