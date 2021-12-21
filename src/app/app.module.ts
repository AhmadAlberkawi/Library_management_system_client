import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BookRegisterComponent } from './book-register/book-register.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    OverviewPageComponent,
    AdminRegisterComponent,
    AdminPageComponent,
    StudentPageComponent,
    StudentRegisterComponent,
    HomePageComponent,
    BookPageComponent,
    BookRegisterComponent,
    BorrowPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
