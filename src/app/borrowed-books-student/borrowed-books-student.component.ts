import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BorrowForStudent } from '../_models/BorrowForStudent';
import { BorrowService } from '../_services/borrow.service';

@Component({
  selector: 'app-borrowed-books-student',
  templateUrl: './borrowed-books-student.component.html',
  styleUrls: ['./borrowed-books-student.component.css']
})
export class BorrowedBooksStudentComponent implements OnInit {

  stIdChoice: number;
  borrowIdChoice: number;

  borrowforStudentL$: Observable<BorrowForStudent[]>;

  constructor(private borrowService: BorrowService, private toastr: ToastrService,
    private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.stIdChoice = this.activeRouter.snapshot.params.id;
    this.borrowforStudentL$ = this.borrowService.getBorrowOneStudent(this.stIdChoice);
  }

  deleteBorrow() {
    if (this.borrowIdChoice) {
      this.borrowService.deleteBorrow(this.borrowIdChoice).subscribe(() => {
        this.toastr.success('Buch wurde erfolgreich zurückgegeben');
      });
    }
  }

}
