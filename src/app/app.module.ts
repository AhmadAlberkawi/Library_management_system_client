import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BookRegisterComponent } from './book-register/book-register.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { BookEditComponent } from './book-edit/book-edit.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { BorrowedBooksStudentComponent } from './borrowed-books-student/borrowed-books-student.component';


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
    BorrowPageComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    AdminEditComponent,
    AdminChangePasswordComponent,
    AdminNavComponent,
    BookEditComponent,
    StudentEditComponent,
    BorrowBookComponent,
    BorrowedBooksStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
