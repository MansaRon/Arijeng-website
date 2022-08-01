import { Injectable } from "@angular/core";
import { Endpoints } from "../urlServices/endpoints";

@Injectable()
export class Registration {
    constructor(private endpoints: Endpoints) {}
}