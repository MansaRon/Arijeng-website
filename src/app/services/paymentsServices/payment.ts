import { Injectable } from "@angular/core";
import { Endpoints } from "../urlServices/endpoints";

@Injectable()
export class Payment {
    constructor(private endpoints: Endpoints) {}
}