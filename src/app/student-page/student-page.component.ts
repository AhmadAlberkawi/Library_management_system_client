import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
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

  /*
  registerFrom: boolean;
  register: boolean;
  student: StudentL;
  */

  idChoice: number;
  students$: Observable<StudentL[]>;


  /* Borrow
  borrowState: boolean;
  borrowForStudentState: boolean;

  bkIdChoice: number;
  AddBorrow: BorrowAdd;
  borrowIdChoice: number;
  */

  constructor(public studentservice: StudentService, public bookService: BookService,
    public borrowService: BorrowService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.students$ = this.studentservice.getStudents();
  }

  editStudent() {
    if (this.idChoice) {
      this.router.navigateByUrl('/student-edit/' + this.idChoice);
    }
  }

  deleteStudent() {
    if (this.idChoice) {
      this.studentservice.deleteStudent(this.idChoice).subscribe(
        () => {
          this.toastr.success('Student wurde erfolgreich gelöscht');
        }
      );
    }
  }

  // Borrow a book

  borrowBook() {
    if (this.idChoice) {
      this.router.navigateByUrl('/borrow/book/' + this.idChoice);
    }
  }

  // books borrowed from a student

  showBooks() {
    if (this.idChoice) {
      this.router.navigateByUrl('borrow/books/student/' + this.idChoice);
    }
  }

  /*
  // Borrow REST_API

  getBorrowOneStudent() {
    this.borrowService.getBorrowOneStudent(this.idChoice).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  deleteBorrow() {
    if (typeof this.borrowIdChoice !== 'undefined') {
      this.borrowService.deleteBorrow(this.borrowIdChoice).subscribe();
      this.borrowForStudentState = false;
    }
  }

  borrow() {
    if (typeof this.bkIdChoice !== 'undefined') {

      this.AddBorrow = { studentId: this.idChoice, bookId: this.bkIdChoice };

      this.borrowService.addBorrow(this.AddBorrow).subscribe(response => {
        console.log(response);
        this.toastr.success("Das Buch wurde erfolgreich ausgeliehen");
      });

      this.borrowState = false;
    }
  }

  // Cancel

  cancel() {
    this.borrowState = false;
    this.borrowForStudentState = false;
  }
  */

}
