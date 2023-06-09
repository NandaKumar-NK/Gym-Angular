import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './services/auth.guard';
import { BMICalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { TrainersDetailsComponent } from './trainers-details/trainers-details.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'admin-page', component:AdminComponent,canActivate:[AuthGuard]},
  {path:'user-page', component:UserComponent,canActivate:[AuthGuard]},
  {path:'BMI-Calculator',component:BMICalculatorComponent,canActivate:[AuthGuard]},
  {path:'Appointment-booking',component:AppointmentBookingComponent,canActivate:[AuthGuard]},
  {path:'Trainer-details',component:TrainersDetailsComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
