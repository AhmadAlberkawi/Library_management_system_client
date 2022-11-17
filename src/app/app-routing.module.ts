import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BookRegisterComponent } from './book-register/book-register.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { BorrowedBooksStudentComponent } from './borrowed-books-student/borrowed-books-student.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'overview', component: OverviewPageComponent },
      { path: 'student-page', component: StudentPageComponent },
      { path: 'student-register', component: StudentRegisterComponent },
      { path: 'student-edit/:id', component: StudentEditComponent },
      { path: 'Book-page', component: BookPageComponent },
      { path: 'book-register', component: BookRegisterComponent },
      { path: 'book-edit/:id', component: BookEditComponent },
      { path: 'borrow-page', component: BorrowPageComponent },
      { path: 'borrow/book/:id', component: BorrowBookComponent },
      { path: 'borrow/books/student/:id', component: BorrowedBooksStudentComponent },
      { path: 'admin-page', component: AdminPageComponent, canActivate: [AdminGuard] },
      { path: 'admin-register', component: AdminRegisterComponent },
      { path: 'admin-edit', component: AdminEditComponent, canDeactivate: [PreventUnsavedChangesGuard] },
      { path: 'admin-change-password', component: AdminChangePasswordComponent}
    ],
  },
  { path: 'errors', component: TestErrorsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
