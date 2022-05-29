import {Lamp} from "./lamp";

export class Room {
  private readonly id: number;
  public name!: string;
  public lamps!: Lamp[];

  constructor(id: number) {
    this.id = id;
  }
}
