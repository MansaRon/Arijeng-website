import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "src/app/models/login";
import { Register } from "src/app/models/register";
import { ResetPassword } from "src/app/models/resetpassword";
import { Endpoints } from "../urlServices/endpoints";

@Injectable({providedIn: 'any'})
export class Registration {
    constructor(private endpoints: Endpoints, private http: HttpClient) {}

    public registerUser(userBody: Register): Observable<any> {
        return this.http.post(this.endpoints.arijengurl() + "auth/register", userBody, {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
        }) 
    }

    public loginUser(userBody: Login): Observable<any> {
        return this.http.post(this.endpoints.arijengurl() + "auth/login", userBody, {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
        }) 
    }

    public logoutUser(userBody: Login): Observable<any> {
        return this.http.post(this.endpoints.arijengurl() + "auth/logout", userBody, {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
        }) 
    }

    public confirmOTP(userMobile: any): Observable<any> {
        return this.http.post(this.endpoints.arijengurl() + "auth/request/" + userMobile + "/confirmation", null, {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
        }) 
    }
    
    public resetPassword(resetPwdBody: ResetPassword): Observable<any> {
        return this.http.post(this.endpoints.arijengurl() + "auth/reset/pwd", resetPwdBody, {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
        }) 
    }

}