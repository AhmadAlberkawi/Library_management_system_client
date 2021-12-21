import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { StudentPageComponent } from './student-page/student-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: 'student-page', component: StudentPageComponent },
  { path: 'Book-page', component: BookPageComponent },
  { path: 'borrow-page', component: BorrowPageComponent },
  { path: 'admin-page', component: AdminPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
