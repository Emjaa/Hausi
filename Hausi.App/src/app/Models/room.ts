import {Lamp} from "./lamp";

export class Room {
  private readonly id: number;
  public lamps!: Lamp[];

  constructor(id: number) {
    this.id = id;
  }
}
