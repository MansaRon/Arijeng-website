import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderUpdate } from "src/app/models/order-update";
import { Endpoints } from "../urlServices/endpoints";

@Injectable({providedIn: 'any'})
export class Order {
    constructor(private endpoints: Endpoints, private http: HttpClient) {}

    public getAllOrders(adminToken: string | null): Observable<any> {
        const token = " Bearer " + adminToken; 
        return this.http.get<any>(this.endpoints.arijengurl() + "order/orders", {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', token)
        }) 
    }

    public updateOrderStatus(orderId: String, updateOrderDTO: OrderUpdate, orderStatus: String): Observable<any> {
        return this.http.put<OrderUpdate>(this.endpoints.arijengurl() + "order/" + orderId + "/status/" + orderStatus + "/update", updateOrderDTO, {
            headers: new HttpHeaders()
                    .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
                    .set("Access-Control-Allow-Origin", "*")
                    .set("Accept", 'application/json')
                    .set('Content-Type', 'application/json')
        }) 
    }
}