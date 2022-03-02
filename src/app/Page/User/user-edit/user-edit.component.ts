import { Component, OnInit } from '@angular/core';
import BaseComponent from 'src/app/Core/BaseComponent';
import SessionHelper from 'src/app/Core/SessionHelper';
import UserDataService from 'src/app/DataServices/UserDataService';
import { UserViewModel } from 'src/app/ViewModels/User/UserViewModel';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends BaseComponent {

  Model:UserViewModel;
  constructor(private http:UserDataService) { 
    super();
  }

  ngOnInit(): void {
    SessionHelper.CheckAuth();
    this.Model=new UserViewModel();
    this.Model=Object.assign(this.Model,this.Auth);
  }
  Update()
  {
    this.http.Update(this.Model).subscribe(res=>{

      alert(res.Message);
      SessionHelper.SetSession(Object.assign(this.Auth,this.Model));  

    },(error:any)=>{
      alert(error.message)
    })
  }



}
