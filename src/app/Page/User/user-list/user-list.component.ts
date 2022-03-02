import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import SessionHelper from 'src/app/Core/SessionHelper';
import UserDataService from 'src/app/DataServices/UserDataService';
import { UserModel } from 'src/app/Models/UserModel';
import { UserListViewModel } from 'src/app/ViewModels/User/UserLisViewModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Phone', 'Email'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
 

  Model:UserListViewModel;
  constructor(private http:UserDataService) { }

  ngOnInit(): void {
    SessionHelper.CheckAuth();
    this.Model=new UserListViewModel();
    this.Bind();
  }

  Bind(){
    this.http.List().subscribe(res=>{
      this.Model.List=new MatTableDataSource<UserModel>(res.Data as UserModel[]);;
      this.Model.List.paginator = this.paginator;

    },error=>{
      alert(error.message)
    })
  }

}
