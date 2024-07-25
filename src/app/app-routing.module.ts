// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormListComponent } from './form-list/form-list.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { TeamComponent } from './team/team.component';
import {  DossierComponent } from './dossier/dossier.component';
// import { CarouselComponent } from './carousel/carousel.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  
  { path: '', component: LoginComponent },
  
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'forms', component: FormListComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'submissions', component: SubmissionsComponent },
      { path: 'team', component: TeamComponent },
      { path: 'dossier', component: DossierComponent },
      // {path: ' carousel', component:CarouselComponent},
      { path: 'form', component: FormComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






