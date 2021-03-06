import { Injectable } from '@angular/core';
import { Login } from './login.model';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData: Login= {  
    Password: null,  
    Email:null,
  };
  
  constructor(private http:HttpClient) { }
  readonly rootUrl = 'http://localhost:50091/api';
  list : Account[];
 
  postPaymentDetail(formData:Account){ 
    return this.http.post(this.rootUrl+'/PaymentDetail',formData);
  } 
  // putPaymentDetail(formData:Account){ 
  //   return this.http.put(this.rootUrl+'/PaymentDetail/'+formData);
  // }  
  deletePaymentDetail(id:number){ 
    return this.http.delete(this.rootUrl+'/PaymentDetail/'+id);
  } 
  refreshList(){
    this.http.get(this.rootUrl + '/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as Account[]);
  }
}
