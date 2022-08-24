import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderUpdate } from "src/app/models/order-update";
import { Endpoints } from "../urlServices/endpoints";

@Injectable({providedIn: 'any'})
export class Order {
    constructor(private endpoints: Endpoints, private http: HttpClient) {}

    public getAllOrders(): Observable<any> {
        return this.http.get(this.endpoints.arijengurl() + "order/orders", {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
        }) 
    }

    public updateOrderStatus(orderId: String, updateOrderDTO: OrderUpdate): Observable<any> {
        return this.http.put(this.endpoints.arijengurl() + "order/" + orderId + "/update", updateOrderDTO, {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
        }) 
    }
}