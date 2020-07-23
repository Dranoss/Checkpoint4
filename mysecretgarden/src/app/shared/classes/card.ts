import { User } from './user';
import { CardType } from './card-type';

export class Card {

  public id?: number;
  public name?: string;
  public user?: User;
  public cardType?: CardType;

  constructor(
    id?: number,
    name?: string,
    user?: User,
    cardType?: CardType
    ){

    this.id = id;
    this.name = name;
    this.user = user;
    this.cardType = cardType;
  }
}
