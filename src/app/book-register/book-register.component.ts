import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookL } from '../_models/bookL';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent implements OnInit {

  model = {} as BookL;

  constructor(private bookService: BookService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  addBook() {

    this.bookService.addBook(this.model).subscribe(response => {
      console.log(response);

      this.router.navigateByUrl('/Book-page')
      this.toastr.success('Buch wurde regestriert');
    });
  }
}
