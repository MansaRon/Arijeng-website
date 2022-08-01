import { Injectable } from "@angular/core";
import { Endpoints } from "../urlServices/endpoints";

@Injectable()
export class Restaurant {
    constructor(private endpoints: Endpoints) {}
}