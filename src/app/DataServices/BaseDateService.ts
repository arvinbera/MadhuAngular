import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import SessionHelper from "../Core/SessionHelper";

export default class BaseDataService {

    private ApiUrl:string="http://127.0.0.1:8000/api/";

    protected ModelRequest(http:HttpClient, url:string,model:any):Observable<BaseResponse>{

        let data=Object.assign(model??{},SessionHelper.GetApiToken())
        return http.post<BaseResponse>(this.ApiUrl+url,data);
    }


    
    protected FileRequest(http:HttpClient, url:string,model:any):Observable<BaseResponse>{

        let data=Object.assign(model??{},SessionHelper.GetApiToken())
        return http.post<BaseResponse>(this.ApiUrl+url,this.ToFormData(data));
    }


    protected FileMultipleRequest(http:HttpClient, url:string,model:FormData):Observable<BaseResponse>{
        model.append("ApiToken",SessionHelper.GetApiToken<any>()?.ApiToken);
        return http.post<BaseResponse>(this.ApiUrl+url,model);
    }


    private ToFormData(model:any) :FormData {
        let para=new FormData();
        for(let key in model){
            para.append(key,model[key]);
        }
        return para;
    }
}


interface BaseResponse {
    IsSuccess:boolean;
    Data:Object;
    Message:string;
    Errors:Object;
}