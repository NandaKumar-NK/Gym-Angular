import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrainersDetails } from '../models/TrainerDetails';
@Injectable({
    providedIn: 'root'
  })
  export class TrainersService{
    constructor(private http:HttpClient) { }

    addtrainerDetails(item:ITrainersDetails):Observable<ITrainersDetails>
  {
    return this.http.post<ITrainersDetails>(`https://localhost:7036/api/TrainersDetails`,item);
  }
  getCourse():Observable<ITrainersDetails[]>
  {
    return this.http.get<ITrainersDetails[]>(`https://localhost:7036/api/TrainersDetails`);
  }
}