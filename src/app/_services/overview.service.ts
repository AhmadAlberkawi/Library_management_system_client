import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Overview } from '../_models/Overview';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOverview() {
    return this.http.get<Overview>(this.baseUrl + 'Overview/');
  }
}
