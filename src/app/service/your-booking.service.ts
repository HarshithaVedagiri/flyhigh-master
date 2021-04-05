import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class YourBookingService {

  constructor(private http:HttpClient) { }
  getPassengerListByEmail(email) {
    return this.http.post('http://localhost:8080/getPassengerListByEmail',email);
  }
  getReservationListByPassengerIdList(passengerIdList){
    return this.http.post('http://localhost:8080/getReservationListByPassengerIdList',passengerIdList);
  }

}
