import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { BMICalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { AddTrainersComponent } from './add-trainers/add-trainers.component';
import { TrainersDetailsComponent } from './trainers-details/trainers-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminComponent,
    UserComponent,
    BMICalculatorComponent,
    AppointmentBookingComponent,
    AddTrainersComponent,
    TrainersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, 
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
