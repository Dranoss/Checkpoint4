import { Card } from './card';

export class Guardian {

  public id?: number;
  public username?: string;
  public lastName?: string;
  public firstName?: string;
  public password?: string;
  public profilePicture?: string;
  public cards?: Card[];


  constructor(
    username: string,
    lastName: string,
    firstName: string,
    password: string,
    id?: number,
    profilePicture?: string,
    cards?: Card[],
    ){

    this.id = id;
    this.username = username,
    this.lastName = lastName;
    this.firstName = firstName;
    this.password = password;
    this.profilePicture = profilePicture;
    this.cards = cards;
  }
}
