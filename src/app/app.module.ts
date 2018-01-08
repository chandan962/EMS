import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the ButtonsModule
import { AlertModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ControlMessagesComponent } from './validation/control-messages.component';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MemberComponent } from './home/member/member.component';
import { NoteComponent } from './home/note/note.component';
import { AttendanceComponent } from './home/attendance/attendance.component';
import { ProjectComponent } from './home/project/project.component';
import { TaskComponent } from './home/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MemberComponent,
    ControlMessagesComponent,
    NoteComponent,
    AttendanceComponent,
    ProjectComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AlertModule,
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
