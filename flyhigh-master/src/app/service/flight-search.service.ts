import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  constructor(private http:HttpClient) {}
  flightSearch(query){
    return this.http.post('http://localhost:8080/flightSearch',query);
  }
  flightSearch_MOCK(query) {
    return [
      {id:1,airline:'American',origin:'LAX',destination:'SFO',departureTime:'2020-03-22 07:00:00',arrivalTime:'2020-03-22 08:28:00',numberOfStops:'Nonstop',price:69},
      {id:2,airline:'Delta',origin:'LAX',destination:'SFO',departureTime:'2020-03-22 07:00:00',arrivalTime:'2020-03-22 08:35:00',numberOfStops:'Nonstop',price:69},
      {id:3,airline:'United',origin:'LAX',destination:'SFO',departureTime:'2020-03-22 08:10:00',arrivalTime:'2020-03-22 09:55:00',numberOfStops:'Nonstop',price:69},
      {id:4,airline:'Alaska',origin:'LAX',destination:'SFO',departureTime:'2020-03-22 18:55:00',arrivalTime:'2020-03-22 20:20:00',numberOfStops:'Nonstop',price:79},
      {id:5,airline:'American',origin:'LAX',destination:'SFO',departureTime:'2020-03-22 08:17:00',arrivalTime:'2020-03-22 09:48:00',numberOfStops:'Nonstop',price:69},
      {id:6,airline:'Alaska',origin:'LAX',destination:'SFO',departureTime:'2020-03-22 06:00:00',arrivalTime:'2020-03-22 07:29:00',numberOfStops:'Nonstop',price:79},
      {id:7,airline:'Delta',origin:'LAX',destination:'SFO',departureTime:'2020-03-22 09:05:00',arrivalTime:'2020-03-22 10:41:00',numberOfStops:'Nonstop',price:79},
    ];
  }
}
