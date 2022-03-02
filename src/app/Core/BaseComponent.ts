import { OnInit } from "@angular/core";
import { UserModel } from "../Models/UserModel";
import SessionHelper from "./SessionHelper";

export default class BaseComponent implements OnInit {

    public Auth:UserModel=SessionHelper.GetSession<UserModel>();

    ngOnInit(): void {
        
    }
    

    LogOut(){

        if(!window.confirm("Are you sure ?")){
            return ;
        }

        SessionHelper.SetSession(null);
        window.location.href="/user/login";


    }
} 