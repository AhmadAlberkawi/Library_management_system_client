import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookL } from '../_models/bookL';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  model = {} as BookL;
  bookId: number;

  constructor(private bookService: BookService, private toastr: ToastrService,
    private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.bookId = this.activeRouter.snapshot.params.id;

    if (this.bookService.books) {
      this.model = this.bookService.books.find(x => x.id == this.bookId);
    } else {
      this.getBook();
    }
  }

  getBook() {

    this.bookService.getBook(this.bookId).subscribe(
      book => {
        this.model = book;
      }
    );
  }

  editBook() {

    this.bookService.editBook(this.model).subscribe(
      response => {
        console.log(response);

        this.router.navigateByUrl('/Book-page');
        this.toastr.success('Buch wurde erfolgreich aktualisiert');
      }
    );
  }

}
