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
      Response => {
        if (this.overviewService.overview) {
        this.students = this.overviewService.overview.anzahlStudent;
        this.books = this.overviewService.overview.anzahlBook;
        this.borrows = this.overviewService.overview.anzahlBorrow;
          this.admins = this.overviewService.overview.anzahlAdmin;
        }
      },
      error => { console.log(error); }
    );
  }

}
