import { Component } from '@angular/core';
import { ITrainersDetails } from '../models/TrainerDetails';
import { Router } from '@angular/router';
import { TrainersService } from '../services/Trainers.service';

@Component({
  selector: 'app-add-trainers',
  templateUrl: './add-trainers.component.html',
  styleUrls: ['./add-trainers.component.css']
})
export class AddTrainersComponent {
  constructor(private traines:TrainersService,private router: Router) { }
  trainer:ITrainersDetails={
    trainerName: "",
    experiance: 0,
    imageLocation: "",
    about: "",
    appointment: [],

  }
  trd?:ITrainersDetails[];
 
   addtrainer()
   {
     this.traines.addtrainerDetails(this.trainer).subscribe(trainer => console.log(trainer));
     this.router.navigate(['/admin-page'], { skipLocationChange: true }).then(() => {
       window.location.reload();
     });
     alert("New Trainer added successfully!!! ")
   }
}
