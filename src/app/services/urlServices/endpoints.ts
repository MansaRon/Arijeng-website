import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class Endpoints {

    private url: string = 'https://arijeng-app.herokuapp.com/api/v1/';

    constructor(private http: HttpClient) {}

    public arijengurl(): string {
        return this.url;
    }

}