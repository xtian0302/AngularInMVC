import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/shared/account.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  constructor(public service:AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  resetForm(form?:NgForm){
    if(form!=null) 
      form.resetForm();

    this.service.formData = { 
        Email:'',
        Password:'',
        FirstName:'', 
        LastName:''
    }
  }
  onSubmit(form:NgForm){
    this.service.postRegistration(form.value).subscribe( 
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Registered Succesfully", "User Registration")
      },
      err=>{
        console.log(err);
        this.toastr.error(err,"Error Occured")
      }
    );
  }
}