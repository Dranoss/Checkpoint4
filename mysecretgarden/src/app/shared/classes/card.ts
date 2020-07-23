
import { CardType } from './card-type';
import { Guardian } from './user';

export class Card {

  public id?: number;
  public name?: string;
  public content?: string;
  public user?: Guardian;
  public cardType?: CardType;

  constructor(
    id?: number,
    name?: string,
    content?: string,
    user?: Guardian,
    cardType?: CardType
    ){

    this.id = id;
    this.content = content;
    this.name = name;
    this.user = user;
    this.cardType = cardType;
  }
}
