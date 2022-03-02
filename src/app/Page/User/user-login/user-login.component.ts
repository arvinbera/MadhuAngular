import { Component, OnInit } from '@angular/core';
import BaseComponent from 'src/app/Core/BaseComponent';
import SessionHelper from 'src/app/Core/SessionHelper';
import UserDataService from 'src/app/DataServices/UserDataService';
import { UserLoginViewModel } from 'src/app/ViewModels/User/UserLoginViewModel';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseComponent {
  Model: UserLoginViewModel;
  constructor(private http: UserDataService) {
    super();
   }

  ngOnInit(): void {
    this.Model = new UserLoginViewModel();
  }
  Login() {
    this.http.Login(this.Model).subscribe(
      res => { 
        if(!res.IsSuccess){
         return alert(res.Message)
        }
       SessionHelper.SetSession(res.Data);
       window.location.href="/user/profile";
      })
  }

}
