import {Room} from "../../../shared/models/room";

export class Lamp {
  private readonly id: number;
  public ipAddress!: string;
  public turnOnUrl!: string;
  public turnOffUrl!: string;
  public state: boolean;
  private color!: number;
  public name!: string;
  public description!: string;
  public watts!: number;
  public room!: Room;

  constructor(id: number) {
    this.id = id;
    this.state = false;
  }

  public On(): void {
    this.state = true;
  }

  public Off(): void {
    this.state = false;
  }

  public SetState(state: boolean): void {
    this.state = state;
  }

  public GetState(): boolean {
    return this.state;
  }

  public GetId(): number {
    return this.id;
  }


}
