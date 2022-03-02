import { Component, OnInit } from '@angular/core';
import SessionHelper from 'src/app/Core/SessionHelper';
import UserDataService from 'src/app/DataServices/UserDataService';
import { UserViewModel } from 'src/app/ViewModels/User/UserViewModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Model:UserViewModel;
  constructor(private http:UserDataService) { }

  ngOnInit(): void {
    this.Model=new UserViewModel();
  }

  Create(){

    // let p=new FormData();
    // p.append("Name",this.Model.Name);
    this.http.Register(this.Model).subscribe(res=>{
      console.log(res)
      SessionHelper.SetSession(res.Data);
       window.location.href="/user/profile";
    })
  }
  SetFile(event:any)
  {
    this.Model.File=event.target.files[0];
  }

}
