import { Component, OnInit } from '@angular/core';
import BaseComponent from 'src/app/Core/BaseComponent';
import SessionHelper from 'src/app/Core/SessionHelper';
import UserDataService from 'src/app/DataServices/UserDataService';
import { UserProfileModel } from 'src/app/ViewModels/User/UserProfileModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends BaseComponent {

  constructor(private http:UserDataService) {
    super();
   }
  Model:UserProfileModel;
  ngOnInit(): void {
    SessionHelper.CheckAuth();
    this.Model=new UserProfileModel();
    this.Details();
  }


  SetMultiFile (event:any) {
    if(!window.confirm("Are you sure ?")){
      return ;
    }
    let files=event.target.files;

    let form=new FormData();

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        form.append('Files[]', file);
     }

    this.http.UploadMultiple(form).subscribe(res=>{
      alert(res.Message);
    })



  }



  SetFile(event:any){

    if(!window.confirm("Are you sure ?")){
      return;
    }
    this.Model.File=event.target.files[0];
    this.http.Upload(this.Model).subscribe(res=>{
      alert(res.Message);
    })
  }
  Details(){
    this.http.Profile().subscribe(res=>{
      if(!res.IsSuccess){
        alert(res.Message);
        return;
      }
      this.Model=Object.assign(this.Model,res.Data);
    },error=>{
      alert(error.message);
    })
  }


}
