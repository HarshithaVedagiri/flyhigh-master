import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { FlightSearchService} from '../../service/flight-search.service';
import {forkJoin} from 'rxjs';


@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  outbound;
  return;
  type;
  outboundFlightList;
  returnFlightList;
  outboundQuery;
  returnQuery;
  constructor(private router:Router, private flightSearchService:FlightSearchService) { }

  ngOnInit(): void {
  }
  onSubmit(form) {
    console.log(form.value);
    this.outboundFlightList, this.returnFlightList = [];
    this.outboundQuery = {
      departureCity:form.value.departureCity,
      arrivalCity:form.value.arrivalCity,
      dateOfDeparture:new Date(form.value.outbound.year,form.value.outbound.month-1,form.value.outbound.day)
    }
    if(form.value.return && this.type!=='oneway'){
      this.returnQuery = {
        departureCity:form.value.arrivalCity,
        arrivalCity:form.value.departureCity,
        dateOfDeparture:new Date(form.value.return.year,form.value.return.month-1,form.value.return.day)
      }
      forkJoin([
        this.flightSearchService.flightSearch(this.outboundQuery),
        this.flightSearchService.flightSearch(this.returnQuery)]).subscribe(res => {
        this.outboundFlightList = res[0];
        this.returnFlightList = res[1];
      })
    }
    else{
      this.flightSearchService.flightSearch(this.outboundQuery).subscribe(res => {
        this.outboundFlightList = res;
      })
    }
    //this.flightList = this.flightSearchService.flightSearch_MOCK(this.query);
  }
}
