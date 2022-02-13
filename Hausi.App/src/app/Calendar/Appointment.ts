export interface Appointment{
  title: string;
  fromDate: Date;
  toDate: Date;
  description: string;
  doRepeat: boolean;
  repetitionInterval: bigint;
  color: bigint;
}
