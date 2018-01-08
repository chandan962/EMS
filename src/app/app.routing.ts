import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './home/member/member.component';
import { AttendanceComponent } from './home/attendance/attendance.component';
import { ProjectComponent } from './home/project/project.component';
import { TaskComponent } from './home/task/task.component';
import { NoteComponent } from './home/note/note.component';
import { Component } from '@angular/core/src/metadata/directives';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: HomeComponent,
    // canActivate: [OnlyLoggedInUsersGuard],
     children: [
       { path: 'member', component: MemberComponent},
       { path: 'attendance', component: AttendanceComponent},
       { path: 'project', component: ProjectComponent },
       { path: 'task', component: TaskComponent },
       {path: 'note', component: NoteComponent}
    ]
  },
  { path: 'login',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
