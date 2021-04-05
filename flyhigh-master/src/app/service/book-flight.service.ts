import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookFlightService {

  constructor(private http:HttpClient) { }
  bookFlight(cardDetails) {
    return this.http.post('http://localhost:8080/completeReservation',cardDetails,{responseType:'text'});
  }

  getUserByEmail(email){
    return this.http.post('http://localhost:8080/getUserByEmail',email);
  }
}
