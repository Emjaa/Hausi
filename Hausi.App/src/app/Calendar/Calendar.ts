import {Appointment} from "./Appointment";

export interface Calendar{
  title: string;
  appointments: Appointment[];
  showAppointments: boolean;
}
