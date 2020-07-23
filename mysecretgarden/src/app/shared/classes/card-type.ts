import { Card } from './card';

export class CardType {

  public id?: number;
  public name?: string;
  public color?: string;
  public card?: Card;

  constructor(
    id?: number,
    name?: string,
    color?: string,
    card?: Card
    ){

    this.id = id;
    this.name = name;
    this.color = color;
    this.card = card;
  }
}
