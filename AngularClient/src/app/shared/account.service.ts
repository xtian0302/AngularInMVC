import { Injectable } from '@angular/core';
import { Account } from './account.model';
import{HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
}) 
export class AccountService {
  formData: Account= { 
    Email: null,
    Password: null,
    Password2: null,
    FirstName: null,
    LastName: null
  };
  
  constructor(private http:HttpClient) { } 
  list : Account[];
 
  postRegistration(formData:Account){  
    return this.http.post(`${environment.apiUrl}/api/accounts`, formData);
  }  
  deletePaymentDetail(id:number){ 
    return this.http.delete(`${environment.apiUrl}/api/auth/login`+id);
  } 
  refreshList(){
    this.http.get(`${environment.apiUrl}/api/auth/login`)
    .toPromise()
    .then(res => this.list = res as Account[]);
  }

  getAll() {
      return this.http.get<Account[]>(`${environment.apiUrl}/users`);
  }
}