export default class SessionHelper {

    public static Token:string="session";

    public static GetSession<T>():T {
        let data=localStorage.getItem(SessionHelper.Token);
        if(!data || data=="undefined"){
            return null;
        }
        return JSON.parse(data) as T;
    }

    public static SetSession<T>(data:T){
        localStorage.setItem(SessionHelper.Token,JSON.stringify(data));
    }

    public static GetApiToken<T> ():T {
        return { ApiToken: SessionHelper.GetSession<any>()?.ApiToken } as unknown as T;
    }


    public static CheckAuth(){
        if(!SessionHelper.GetSession()){
            window.location.href="user/login";
        }
    }
}