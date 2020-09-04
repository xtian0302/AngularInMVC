import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
import { Account } from '../shared/account.model';
import { AuthenticationService } from '../shared/authentication.service'; 

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: []
})
export class AccountComponent implements OnInit {

  currentUser: Account;
 
  constructor(private route: ActivatedRoute,private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.route = params['route']; 
      });
    }
 
    logout(){
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }  
}
