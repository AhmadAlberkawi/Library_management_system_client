import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BookL } from '../_models/bookL';
import { BorrowAdd } from '../_models/BorrowAdd';
import { BookService } from '../_services/book.service';
import { BorrowService } from '../_services/borrow.service';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  stIdChoice: number;
  bkIdChoice: number;
  AddBorrow: BorrowAdd;

  bookList$: Observable<BookL[]>;


  constructor(private borrowService: BorrowService, private toastr: ToastrService,
    private bookService: BookService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.bookList$ = this.bookService.getBooks();
    this.stIdChoice = this.activeRouter.snapshot.params.id;
  }


  borrow() {
    if (this.bkIdChoice) {

      this.AddBorrow = { studentId: this.stIdChoice, bookId: this.bkIdChoice };

      this.borrowService.addBorrow(this.AddBorrow).subscribe(response => {
        console.log(response);
        this.toastr.success("Das Buch wurde erfolgreich ausgeliehen");
      });
    }
  }

}
