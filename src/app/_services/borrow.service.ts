import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Borrow } from '../_models/Borrow';
import { BorrowAdd } from '../_models/BorrowAdd';
import { BorrowForStudent } from '../_models/BorrowForStudent';
import { OverviewService } from './overview.service';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  baseUrl = environment.apiUrl +'borrow/';

  borrows: Borrow[]= [];

  borrowForStudent: Array<BorrowForStudent>;

  constructor(private http: HttpClient, private overviewService: OverviewService) { }

  getBorrow() {
    if (this.borrows.length > 0) return of(this.borrows);

    return this.http.get(this.baseUrl).pipe(
      map((borrowlist: Borrow[]) => {
        this.borrows = borrowlist;
        return this.borrows;
      })
    );
  }

  getBorrowOneStudent(stId: number) {
    return this.http.get<BorrowForStudent[]>(this.baseUrl + stId).pipe(
      map((Response: Array<BorrowForStudent>) => {
        this.borrowForStudent = Response;
        return Response;
      })
    );
  }

  addBorrow(model: BorrowAdd) {
    return this.http.post(this.baseUrl + 'addBorrow', model).pipe(
      map((borrow: Borrow) => {
        this.borrows.push(borrow);

        if (this.overviewService.overView) {
          this.overviewService.overView.anzahlBorrow++;
        }
      })
    );
  }

  deleteBorrow(id: number) {
    return this.http.delete(this.baseUrl + id).pipe(
      map(() => {
        const index = this.borrows.findIndex(x => x.id == id);
        this.borrows.splice(index, 1);

        if (this.overviewService.overView) {
          this.overviewService.overView.anzahlBorrow--;
        }
      })
    );
  }
}
