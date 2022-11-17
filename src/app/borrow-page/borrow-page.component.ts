import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Borrow } from '../_models/Borrow';
import { BorrowService } from '../_services/borrow.service';

@Component({
  selector: 'app-borrow-page',
  templateUrl: './borrow-page.component.html',
  styleUrls: ['./borrow-page.component.css']
})
export class BorrowPageComponent implements OnInit {

  idChoice: number;
  borrowList$: Observable<Borrow[]>;

  constructor(public borrowService: BorrowService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.borrowList$ = this.borrowService.getBorrow();
  }

  deleteBorrow() {
    if (typeof this.idChoice !== 'undefined') {
      this.borrowService.deleteBorrow(this.idChoice).subscribe(() => {
        this.toastr.success('Buch wurde erfolgreich zurückgegeben');
      });   
    }
  }
}
