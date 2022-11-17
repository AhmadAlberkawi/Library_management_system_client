import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BookL } from '../_models/bookL';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  bookId: number;
  booklist$: Observable<BookL[]>;

  constructor(public bookService: BookService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.booklist$ = this.bookService.getBooks();

    //this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      error => { console.log(error); }
    );
  }

  editBookBtn() {
    if (typeof this.bookId !== 'undefined') {
      this.router.navigateByUrl('/book-edit/' + this.bookId);
    }
  }

  deleteBook() {

    if (typeof this.bookId !== 'undefined') {
      this.bookService.deleteBook(this.bookId).subscribe(response => {
        console.log(response);
      });
    }
  }
  
}
