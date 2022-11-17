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

  /*
  @Input() studentfromList: StudentL;
  @Input() isregister: boolean;
  @Output() cancelRegister = new EventEmitter();
  */

  model = {} as StudentL;

  constructor(public studentservice: StudentService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addStudent() {

    this.studentservice.addStudent(this.model).subscribe(
      () => {
        this.router.navigateByUrl('/student-page');
        this.toastr.success('Student wurde erfolgreich hinzugefügt');
      }
    );
  }
}
