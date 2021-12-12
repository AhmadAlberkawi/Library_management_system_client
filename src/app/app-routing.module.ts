import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { StudentPageComponent } from './student-page/student-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'student-page', component: StudentPageComponent },
  { path: 'admin-page', component: AdminPageComponent },
  { path: 'overview', component: OverviewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
