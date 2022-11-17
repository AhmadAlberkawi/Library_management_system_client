import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Overview } from '../_models/Overview';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  baseUrl = environment.apiUrl;

  overView: Overview;

  constructor(private http: HttpClient) { }

  getOverview() {
    if (this.overView) return of(this.overView);

    return this.http.get<Overview>(this.baseUrl + 'Overview/').pipe(
      map((overview) => {
        this.overView = overview;
        return overview;
      })
    );
  }
}
