import { Component, OnInit } from '@angular/core';
import { OverviewService } from '../_services/overview.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  students: number;
  books: number;
  borrows: number;
  admins: number;

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.getOverview();
  }

  getOverview() {
    this.overviewService.getOverview().subscribe(
      overview => {
        if (overview) {
          this.students = overview.anzahlStudent;
          this.books = overview.anzahlBook;
          this.borrows = overview.anzahlBorrow;
          this.admins = overview.anzahlAdmin;
        }
      },
      error => { console.log(error); }
    );
  }

}
