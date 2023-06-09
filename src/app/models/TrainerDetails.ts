import { IAppointmentBooking } from "./appoinment-details";

export interface ITrainersDetails{
        trainerId?:number;
        trainerName:string;
        experiance:number;
        imageLocation:string;
        about:string; 
        appointment?:IAppointmentBooking[];
}