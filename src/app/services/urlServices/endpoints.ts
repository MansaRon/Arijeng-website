import { Injectable } from "@angular/core";

@Injectable({providedIn: 'any'})
export class Endpoints {

    private url: string = 'https://arijeng-app.herokuapp.com/api/v1/';

    constructor() {}

    public arijengurl(): string {
        return this.url;
    }

}