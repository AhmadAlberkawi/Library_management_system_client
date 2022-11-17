import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Student } from '../_models/student';
import { StudentL } from '../_models/StudentL';
import { OverviewService } from './overview.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = environment.apiUrl +'Student';

  students: StudentL[] = [];

  constructor(private http: HttpClient, private overview: OverviewService) { }

  getStudents() {
    if (this.students.length > 0) return of(this.students);

    return this.http.get<Student[]>(this.baseUrl).pipe(
      map((studentList: StudentL[]) => {
        this.students = studentList;
        return studentList;
      })
    );
  }

  getStudent(id: number) {
    return this.http.get<StudentL>(this.baseUrl + '/' + id);
  }

  addStudent(model: any) {
    return this.http.post(this.baseUrl + '/addStudent', model).pipe(
      map((student: StudentL) => {
        this.students.push(student);

        if (this.overview.overView) {
          this.overview.overView.anzahlStudent++;
        }
      })
    );
  }

  editStudent(model: StudentL) {
    return this.http.put(this.baseUrl + '/editStudent', model).pipe(
      map(() => {
        const index = this.students.findIndex(x => x.id === model.id);
        this.students[index] = model;
      })
    );
  }

  deleteStudent(id: number) {
    return this.http.delete(this.baseUrl + '/' + id).pipe(
      map(() => {

        const index = this.students.findIndex(x => x.id == id);
        this.students.splice(index, 1);

        if (this.overview.overView) {
          this.overview.overView.anzahlStudent--;
        }
      })
    );
  }

}
