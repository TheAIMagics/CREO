import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {  FormGroup, FormControl ,Validators} from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  profileForm:FormGroup;
  countries =['select your Country','India','NewYork','Australia']
  constructor( private router: Router) { }

  
  ngOnInit() {
    this.profileForm = new FormGroup({
      'firstName': new FormControl(null,Validators.required),
      'lastName': new FormControl(null,Validators.required),
      'address': new FormControl(null,Validators.required),
      'country': new FormControl(null,Validators.required),
      'city': new FormControl(null,Validators.required),
      'postalCode' : new FormControl(null,Validators.required),
      'phone' : new FormControl(null,Validators.required),
    });
  
  }

  /*onContinueShipping(){
    this.router.navigate(['/shipping'])
  }*/
  onSubmit( ){
    this.router.navigate(['/shipping'])
  }

}
