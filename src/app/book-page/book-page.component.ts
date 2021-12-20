import { Component, OnInit } from '@angular/core';
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

  constructor(private bookService: BookService) { }

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
    this.bookService.deleteBook(this.idChoice).subscribe(
      error => { console.log(error); }
    );
    location.reload();
  }

  cancelRegisterMode(event: boolean) {
    this.registerForm = event;
    location.reload();
  }
}
