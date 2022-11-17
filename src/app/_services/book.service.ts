import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BookL } from '../_models/bookL';
import { OverviewService } from './overview.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = environment.apiUrl +'book/';

  books: BookL[] = [];

  constructor(private http: HttpClient, private overviewService: OverviewService) { }

  getBooks() {
    if (this.books.length > 0) return of(this.books);
    return this.http.get<BookL[]>(this.baseUrl).pipe(
      map((bookList: BookL[]) => {
        this.books = bookList;
        return this.books;
      })
    );
  }

  getBook(id: number) {
    return this.http.get<BookL>(this.baseUrl + id);
  }

  addBook(model: BookL) {
    return this.http.post(this.baseUrl + 'addBook', model).pipe(
      map((book: BookL) => { 
        this.books.push(book);

        if (this.overviewService.overView) {
          this.overviewService.overView.anzahlBook =
            +this.overviewService.overView.anzahlBook + +model.anzahl;
        }
      })
    );
  }

  editBook(model: BookL) {
    return this.http.put(this.baseUrl + 'editBook', model).pipe(
      map((book: BookL) => {
        const index = this.books.findIndex(x => x.id == model.id);
        this.books[index] = book;
      })
    );
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + id).pipe(
      map(() => {
        const index = this.books.findIndex(x => x.id == id);
        const bookCount: number = (this.books.find(x => x.id == id)).anzahl;

        this.books.splice(index, 1);

        if (this.overviewService.overView) {
          this.overviewService.overView.anzahlBook =
            +this.overviewService.overView.anzahlBook - +bookCount;
        }
      })
    );
  }
}
