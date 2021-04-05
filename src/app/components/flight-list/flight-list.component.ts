import { Component, OnChanges, Input } from '@angular/core';
import * as moment from 'moment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BookFlightService} from '../../service/book-flight.service';
import {LoginService} from '../../service/login.service';


@Component({
  selector: 'flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnChanges {
  @Input() outboundFlightList: any[];
  @Input() returnFlightList: any[];
  closeResult = '';
  flightId;
  nameOnTheCard;
  cardNumber;
  expirationDate;
  securityCode;
  reservation;
  user;
  isBookingSuccessful= false;
  constructor(private modalService: NgbModal,private bookFlightService:BookFlightService, public loginService:LoginService) { }

  ngOnChanges(): void {
    console.log(this.outboundFlightList);
    for(var flight = 0; flight< this.outboundFlightList.length;flight++){
      this.outboundFlightList[flight].dateOfDeparture = moment(this.outboundFlightList[flight].dateOfDeparture).format('L');
      this.outboundFlightList[flight].estimatedDepartureTime = moment(this.outboundFlightList[flight].estimatedDepartureTime).format('LT');
    }
    for(var flight = 0; flight< this.returnFlightList.length;flight++){
      this.returnFlightList[flight].dateOfDeparture = moment(this.returnFlightList[flight].dateOfDeparture).format('L');
      this.returnFlightList[flight].estimatedDepartureTime = moment(this.returnFlightList[flight].estimatedDepartureTime).format('LT');
    }
  }
  open(content,flight) {
    console.log(flight);
    this.flightId = flight.id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(form) {
    console.log(form.value);
    this.isBookingSuccessful = false;
    this.reservation = {
      nameOnTheCard:form.value.nameOnTheCard,
      cardNumber:form.value.cardNumber,
      expirationDate:form.value.expirationDate,
      securityCode:form.value.securityCode,
      flightId:this.flightId
    }
    
    this.bookFlightService.getUserByEmail(sessionStorage.getItem('email')).subscribe((res:any) => {
      this.reservation.passengerFirstName = res.firstName;
      this.reservation.passengerLastName = res.lastName;
      this.reservation.passengerEmail = res.email;
      this.bookFlightService.bookFlight(this.reservation).subscribe(res => {
        this.isBookingSuccessful = true;
      })
    })
    
  }

}
