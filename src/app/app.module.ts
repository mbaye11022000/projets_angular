// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     ForgotPasswordComponent,
//     DashboardComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideClientHydration(),
//     provideAnimationsAsync()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatDividerModule } from '@angular/material/divider';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CarouselComponent } from './carousel/carousel.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     ForgotPasswordComponent,
//     DashboardComponent,
//     CarouselComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatIconModule,
//     MatListModule,
//     MatButtonModule,
//     MatInputModule,
//     MatDividerModule,
//     NgbModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormListComponent } from './form-list/form-list.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { TeamComponent } from './team/team.component';
import { DossierComponent } from './dossier/dossier.component';
import { NavbareComponent } from './navbare/navbare.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateFolderModalComponent } from './create-folder-modal/create-folder-modal.component';
import { FormComponent } from './form/form.component';
import { FolderDialogComponent } from './folder-dialog/folder-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { SortDialogComponent } from './sort-dialog/sort-dialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    CarouselComponent,
    FormListComponent,
    ArchiveComponent,
    TrashComponent,
    SubmissionsComponent,
    TeamComponent,
    DossierComponent,
    NavbareComponent,
    CreateFolderModalComponent,
    FormComponent,
    FolderDialogComponent,
    TeamDialogComponent,
    FilterDialogComponent,
    SortDialogComponent,
    DialogComponentComponent,
    ProfileMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatPaginatorModule,
    MatRadioModule,
    MatMenuModule,
    MatCheckboxModule
      
  ],
  providers: [
    provideAnimationsAsync(),
    provideAnimationsAsync('noop')
  ],
  
  bootstrap: [AppComponent],
  
})
export class AppModule { }





