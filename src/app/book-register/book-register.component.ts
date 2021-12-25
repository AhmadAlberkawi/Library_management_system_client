import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookL } from '../_models/bookL';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter(); 
  @Input() bookForEdit: BookL;
  @Input() isregister: boolean;
  model: any = {};

  constructor(private bookService: BookService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (!this.isregister) {
      this.model.id = this.bookForEdit.id;
      this.model.title = this.bookForEdit.title;
      this.model.isbn = this.bookForEdit.isbn;
      this.model.verlag = this.bookForEdit.verlag;
      this.model.verfuegbar = this.bookForEdit.verfuegbar;
      this.model.anzahl = this.bookForEdit.anzahl;
      this.model.autor = this.bookForEdit.autor;
      this.model.kategorie = this.bookForEdit.kategorie;
    }
  }

  addOrEditBook() {
    if (this.isregister) {
      this.bookService.addBook(this.model).subscribe(response => {
        console.log(response);
      },
        error => {
          console.log(error);
          this.toastr.error(error.error);
        });
    }
    else {
      this.bookService.editBook(this.model).subscribe(response => {
        console.log(response);
      },
        error => {
          console.log(error);
          this.toastr.error(error.error);
        });
    }
    this.cancelRegister.emit(false);
    location.reload();
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
