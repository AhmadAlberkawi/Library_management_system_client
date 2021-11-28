import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = '';

  loggedIn: boolean;

  model: any = {};

  constructor(private accountSerive: AccountService) { }

  ngOnInit(): void {
    
  }

  login() {
    this.accountSerive.login(this.model).subscribe(Response => {
      console.log(Response);
      this.loggedIn = true;
    },
      error => {
        console.log(error);
      }
    )
  }

  logout() {
    this.loggedIn = false;
  }

}




  /*

  students: any;


  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {

    this.http.get('https://localhost:5001/Bvs_Api/Student').subscribe(Response => {
      this.students = Response;
    },
      error => {
        console.log(error);
      }
    )
  }
  */
