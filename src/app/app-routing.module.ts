import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'overview', component: OverviewPageComponent },
      { path: 'student-page', component: StudentPageComponent },
      { path: 'Book-page', component: BookPageComponent },
      { path: 'borrow-page', component: BorrowPageComponent },
      { path: 'admin-page', component: AdminPageComponent, canActivate: [AdminGuard] }
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
