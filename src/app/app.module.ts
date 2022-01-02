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
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
