import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './service/auth-guard.service';
import { LoginComponent} from './components/login/login.component';
import { LogoutComponent} from './components/logout/logout.component';
import { RegisterComponent} from './components/register/register.component';
import { FlightSearchComponent} from './components/flight-search/flight-search.component';
import { HomeComponent} from './components/home/home.component';
import { FlightListComponent} from './components/flight-list/flight-list.component';
import { FeedbackComponent} from './components/feedback/feedback.component';
import { CheckInComponent} from './components/check-in/check-in.component';
import { BaggageComponent} from './components/baggage/baggage.component';
import { FlightStatusComponent} from './components/flight-status/flight-status.component';
import { YourBookingComponent} from './components/your-booking/your-booking.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGuardService]},
  {path:'register',component:RegisterComponent},
  {path:'flight-search',component:FlightSearchComponent},
  {path:'flight-list',component:FlightListComponent,canActivate:[AuthGuardService]},
  {path:'feedback',component:FeedbackComponent},
  {path:'check-in',component:CheckInComponent,canActivate:[AuthGuardService]},
  {path:'baggage',component:BaggageComponent},
  {path:'flight-status',component:FlightStatusComponent},
  {path:'your-booking',component:YourBookingComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
