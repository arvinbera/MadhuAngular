import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import BaseDataService from "./BaseDateService";

@Injectable({
    providedIn:'root'
})
export default class UserDataService extends BaseDataService {

    constructor(private http:HttpClient){
        super();
    }
    Register (model:any) {
       return this.FileRequest(this.http,"employee/create",model)
    }
    List () {
        return this.ModelRequest(this.http,"employee/list",null)
     }
    Login (model:any) {
        return this.ModelRequest(this.http,"employee/login",model)
     }
    Profile (){
       return this.ModelRequest(this.http,"employee/detail",null) 
    }
    Update (model:any){
        return this.ModelRequest(this.http,"employee/update",model)
    }

    Upload (model:any){
        return this.FileRequest(this.http,"employee/upload",model)
    }

    UploadMultiple (model:any){
        return this.FileMultipleRequest(this.http,"image/multiple",model)
    }
}