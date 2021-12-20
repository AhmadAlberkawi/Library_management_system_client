import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Overview } from '../_models/Overview';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  baseUrl = 'https://localhost:5001/Bvs_Api/Overview/';

  overview: Overview;

  constructor(private http: HttpClient) { }

  getOverview() {

    return this.http.get(this.baseUrl).pipe(
      map((Response: Overview) => { this.overview = Response; })
    );
  }
}
