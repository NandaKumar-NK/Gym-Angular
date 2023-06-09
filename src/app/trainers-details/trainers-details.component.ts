import { Component, OnInit } from '@angular/core';
import { TrainersService } from '../services/Trainers.service';
import { ITrainersDetails } from '../models/TrainerDetails';

@Component({
  selector: 'app-trainers-details',
  templateUrl: './trainers-details.component.html',
  styleUrls: ['./trainers-details.component.css']
})
export class TrainersDetailsComponent  implements OnInit {
  constructor(private trainrs:TrainersService) { }
  detail?:ITrainersDetails[];
  //details?:ITrainersDetails;
  // qrs:boolean =false;
  selectedTrainerId?: number;
  // update:any=new UpdateCourseComponent(this.crs).updateCourse();
  ngOnInit(): void
  {

    this.trainrs.getCourse().subscribe(detils=>this.detail=detils);
  }
passCourseId(trainerId:any) {
    this.selectedTrainerId = trainerId;
  }
   /* deleteCourse(id:any, name: string) {
    this.crs.deleteCourse(id).subscribe(
      () => {
        confirm("Course " + name + " deleted Successfully!!!")
        {
          window.location.reload();
        }
      },
      error => {
        console.error(error);
        alert("An error occurred while deleting the course. Please try again.");
      }
    );
  }*/

}
