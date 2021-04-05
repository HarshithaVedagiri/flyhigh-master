import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';

import { HomeComponent } from './components/home/home.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { BaggageComponent } from './components/baggage/baggage.component';
import { FlightStatusComponent } from './components/flight-status/flight-status.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { YourBookingComponent} from './components/your-booking/your-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FlightSearchComponent,
    TopNavbarComponent,
    SlideShowComponent,
    FlightListComponent,
    FeedbackComponent,
    CheckInComponent,
    BaggageComponent,
    FlightStatusComponent,
    FooterComponent,
    LogoutComponent,
    YourBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
