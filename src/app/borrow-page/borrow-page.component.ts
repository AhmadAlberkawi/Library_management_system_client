import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../_services/borrow.service';

@Component({
  selector: 'app-borrow-page',
  templateUrl: './borrow-page.component.html',
  styleUrls: ['./borrow-page.component.css']
})
export class BorrowPageComponent implements OnInit {

  idChoice: number;

  constructor(public borrowService: BorrowService) { }

  ngOnInit(): void {
    this.getBorrow();
  }

  getBorrow() {
    this.borrowService.getBorrow().subscribe(
      Response => { console.log(this.borrowService.borrows) },
      error => { console.log(error); }
    );
  }

  deleteBorrow() {
    if (typeof this.idChoice !== 'undefined') {
      this.borrowService.deleteBorrow(this.idChoice).subscribe();
      location.reload();
    }
  }
}
