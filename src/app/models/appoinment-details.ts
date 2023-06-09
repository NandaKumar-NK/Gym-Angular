import { ITrainersDetails } from "./TrainerDetails";

export interface IAppointmentBooking{
    AppointmentId?:number; 
    username? :string;
    email ?:string;
    TrainersDetails?: ITrainersDetails;
    TrainingType?:string;
    TrainingPeriod?:number;

}