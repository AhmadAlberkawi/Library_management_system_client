import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookL } from '../_models/bookL';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  idChoice: number;
  registerForm: boolean;
  isregisterValue: boolean;
  book: BookL;

  constructor(private bookService: BookService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      error => { console.log(error); }
    );
  }

  addBookBtn() {
    this.registerForm = true;
    this.isregisterValue = true;
  }

  editBookBtn() {
    if (typeof this.idChoice !== 'undefined') {
      this.book = this.bookService.books.find(x => x.id == this.idChoice);
      this.registerForm = true;
      this.isregisterValue = false;
    }
  }

  deleteBook() {
    this.bookService.deleteBook(this.idChoice).subscribe(response => {
      console.log(response);
      location.reload();
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerForm = event;
    location.reload();
  }
}
