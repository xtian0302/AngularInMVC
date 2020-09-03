import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import {ToastrModule } from 'ngx-toastr';
import {AppComponent } from './app.component'; 
import {AccountComponent} from './account/account.component';
import {RegisterComponent} from './account/register/register.component';
import {LoginComponent} from './account/login/login.component';
import { AccountService } from './shared/account.service';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
