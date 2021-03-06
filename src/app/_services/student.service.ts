import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Student } from '../_models/student';
import { StudentL } from '../_models/StudentL';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = environment.apiUrl +'Student';

  students: Array<StudentL>;

  constructor(private http: HttpClient) { }

  getStudents() {

    return this.http.get(this.baseUrl).pipe(
      map((Response: Array<StudentL>) => {this.students = Response;})
    );
  }

  addStudent(model: any){
    return this.http.post(this.baseUrl + '/addStudent', model);
  }

  editStudent(model: any) {
    return this.http.put(this.baseUrl + '/editStudent', model);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.baseUrl + '/'+id.toString());
  }

}
