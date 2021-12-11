import { Component, OnInit } from '@angular/core';
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
  idChoice: number;
  student: StudentL;

  constructor(public studentservice: StudentService) { }

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
  }

  editStudent() {
    this.student = this.studentservice.students.find(x => x.id == this.idChoice);
    this.registerFrom = true;
  }

  deleteStudent() {
    this.studentservice.deleteStudent(this.idChoice).subscribe(error => {
      console.log(error);
    }
    );
  }

}
