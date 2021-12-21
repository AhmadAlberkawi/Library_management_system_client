import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BookL } from '../_models/bookL';
import { Borrow } from '../_models/Borrow';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  baseUrl = 'https://localhost:5001/Bvs_Api/borrow/';

  borrows: Array<Borrow>;

  books: Array<BookL>;

  constructor(private http: HttpClient) { }

  getBorrow() {
    return this.http.get(this.baseUrl).pipe(
      map((Response: Array<Borrow>) => { this.borrows = Response; })
    );
  }

  getBorrowOneStudent(stId: number) {
    return this.http.get(this.baseUrl + stId).pipe(
      map((Response: Array<BookL>) => { this.books = Response; })
    );
  }

  addBorrow(model: any) {
    return this.http.post(this.baseUrl, model);
  }

  deleteBorrow(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
