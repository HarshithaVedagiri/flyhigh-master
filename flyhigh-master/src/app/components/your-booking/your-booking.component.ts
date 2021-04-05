import { Component, OnInit} from '@angular/core';
import { YourBookingService} from '../../service/your-booking.service';
import * as moment from 'moment';
@Component({
  selector: 'app-your-booking',
  templateUrl: './your-booking.component.html',
  styleUrls: ['./your-booking.component.scss']
})
export class YourBookingComponent implements OnInit {
  constructor(private yourBookingService: YourBookingService) { }
  yourBookingList
  ngOnInit(): void {
    this.yourBookingService.getPassengerListByEmail(sessionStorage.getItem('email')).subscribe((res:any) => {
      this.yourBookingList = [];
      var idList = [];
      for(var passenger = 0; passenger< res.length;passenger++){
        if(idList.indexOf(res[passenger].flight.id) == -1){
          idList.push(res[passenger].flight.id)
          this.yourBookingList.push(res[passenger].flight);
        }
      }
      console.log(this.yourBookingList);
      for(var flight = 0; flight< this.yourBookingList.length;flight++){
        this.yourBookingList[flight].dateOfDeparture = moment(this.yourBookingList[flight].dateOfDeparture).format('L');
        this.yourBookingList[flight].estimatedDepartureTime = moment(this.yourBookingList[flight].estimatedDepartureTime).format('LT');
      }
    })
  }
}
