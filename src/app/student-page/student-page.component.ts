import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BorrowAdd } from '../_models/BorrowAdd';
import { Student } from '../_models/student';
import { StudentL } from '../_models/StudentL';
import { BookService } from '../_services/book.service';
import { BorrowService } from '../_services/borrow.service';
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

  // Borrow

  borrowState: boolean;
  borrowForStudentState: boolean;
  bkIdChoice: number;
  AddBorrow: BorrowAdd;
  borrowIdChoice: number;

  constructor(public studentservice: StudentService, public bookService: BookService,
    public borrowService: BorrowService, private router: Router, private toastr: ToastrService) { }

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
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
        this.toastr.error(error.error);
      });

    location.reload();
  }

  cancelRegisterMode(event: boolean) {
    this.registerFrom = event;
    location.reload();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      error => { console.log(error); }
    );
  }

  // Borrow REST_API

  getBorrowOneStudent() {
    this.borrowService.getBorrowOneStudent(this.idChoice).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
        this.toastr.error(error.error);
      });
  }

  deleteBorrow() {
    if (typeof this.borrowIdChoice !== 'undefined') {
      this.borrowService.deleteBorrow(this.borrowIdChoice).subscribe();
      this.borrowForStudentState = false;
    }
  }

  // Borrow Part

  borrowBook() {
    if (typeof this.idChoice !== 'undefined') {
      this.getBooks();
      this.borrowState = true;
    }
  }

  borrow() {
    if (typeof this.bkIdChoice !== 'undefined') {

      this.AddBorrow = { studentId: this.idChoice, bookId: this.bkIdChoice };

      this.borrowService.addBorrow(this.AddBorrow).subscribe(response => {
        console.log(response);
        this.toastr.success("Das Buch wurde erfolgreich ausgeliehen");
      },
        error => {
          console.log(error);
          this.toastr.error(error.error);
        });

      this.borrowState = false;
    }
  }

  cancel() {
    this.borrowState = false;
    this.borrowForStudentState = false;
  }


  // books borrowed from a student

  showBooks() {
    if (typeof this.idChoice !== 'undefined') {
      this.getBorrowOneStudent();
      this.borrowForStudentState = true;
    }
  }
}
