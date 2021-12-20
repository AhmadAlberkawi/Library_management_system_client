import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BookL } from '../_models/bookL';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'https://localhost:5001/Bvs_Api/book/';

  books: Array<BookL>;

  constructor(private http: HttpClient) { }

  getBooks() {

    return this.http.get(this.baseUrl).pipe(
      map((Response: Array<BookL>) => { this.books = Response; })
    );
  }

  addBook(model: any) {
    return this.http.post(this.baseUrl + 'addBook', model);
  }

  editBook(model: any) {
    return this.http.put(this.baseUrl + 'editBook', model);
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
