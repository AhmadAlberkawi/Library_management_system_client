import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'overview', component: OverviewPageComponent, canActivate: [AuthGuard] },
  { path: 'student-page', component: StudentPageComponent, canActivate: [AuthGuard] },
  { path: 'Book-page', component: BookPageComponent, canActivate: [AuthGuard] },
  { path: 'borrow-page', component: BorrowPageComponent, canActivate: [AuthGuard] },
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
