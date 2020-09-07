import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Account } from './shared/account.model';
import { AuthGuard } from '../app/_helpers/auth.guard';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component'; 

const routes: Routes = [
    {
      path: 'account-component',
      component: AccountComponent, // this is the component with the <router-outlet> in the template
      children: [
        // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
        {
          path: 'login', // child route path
          component: LoginComponent, // child route component that the router renders
        },
        {
          path: 'register',
          component: RegisterComponent, // another child route component that the router renders
        },
      ],
    },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
