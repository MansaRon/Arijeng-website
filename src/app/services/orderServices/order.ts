import { Injectable } from "@angular/core";
import { Endpoints } from "../urlServices/endpoints";

@Injectable()
export class Order {
    constructor(private endpoints: Endpoints) {}
}