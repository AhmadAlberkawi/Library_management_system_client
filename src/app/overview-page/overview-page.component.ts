import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Overview } from '../_models/Overview';
import { OverviewService } from '../_services/overview.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  overView = {} as Overview;
  overView$: Observable<Overview>;

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {

    this.overView$ = this.overviewService.getOverview();
    this.overView$.pipe(take(1)).subscribe(overView => this.overView = overView);
  }

}
