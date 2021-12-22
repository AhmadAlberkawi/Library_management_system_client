import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Borrow } from '../_models/Borrow';
import { BorrowAdd } from '../_models/BorrowAdd';
import { BorrowForStudent } from '../_models/BorrowForStudent';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  baseUrl = 'https://localhost:5001/Bvs_Api/borrow/';

  borrows: Array<Borrow>;

  borrowForStudent: Array<BorrowForStudent>;

  constructor(private http: HttpClient) { }

  getBorrow() {
    return this.http.get(this.baseUrl).pipe(
      map((Response: Array<Borrow>) => { this.borrows = Response; })
    );
  }

  getBorrowOneStudent(stId: number) {
    return this.http.get(this.baseUrl + stId).pipe(
      map((Response: Array<BorrowForStudent>) => { this.borrowForStudent = Response; })
    );
  }

  addBorrow(model: BorrowAdd) {
    return this.http.post(this.baseUrl+'addBorrow', model);
  }

  deleteBorrow(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
