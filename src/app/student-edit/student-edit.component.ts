import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentL } from '../_models/StudentL';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  model: StudentL;

  constructor(private studentService: StudentService, private activeRouter: ActivatedRoute,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    const studentId = this.activeRouter.snapshot.params.id;

    if (this.studentService.students.length > 0) {
      this.model = this.studentService.students.find(x => x.id == studentId);
    }
    else {
      this.studentService.getStudent(studentId).subscribe(
        student => {
          this.model = student;
        }
      );
    }
  }

  editStudent() {
    this.studentService.editStudent(this.model).subscribe(
      () => {
        this.router.navigateByUrl('/student-page');
        this.toastr.success('Student wurde erfolgreich aktualisiert');
      } 
    );
  }

}
