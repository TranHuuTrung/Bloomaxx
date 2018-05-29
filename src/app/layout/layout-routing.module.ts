import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from '../login/login.component';
// import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', pathMatch: 'full'
    // component: LayoutComponent 
    // , canActivate: [AuthGuard], 
    // redirectTo: '/dashboard'
    // children: [
      // { path: 'dashboard', loadChildren: './dashboard/dashboard.component#'}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
