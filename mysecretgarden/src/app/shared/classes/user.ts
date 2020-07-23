import { Card } from './card';

export class User {

  public id?: number;
  public role?: 'admin' | 'client';
  public lastName?: string;
  public firstName?: string;
  public password?: string;
  public profilePicture?: string;
  public cards?: Card[];


  constructor(
    role: 'admin' | 'client',
    lastName: string,
    firstName: string,
    password: string,
    id?: number,
    profilePicture?: string,
    cards?: Card[],
    ){

    this.id = id;
    this.role = role;
    this.lastName = lastName;
    this.firstName = firstName;
    this.password = password;
    this.profilePicture = profilePicture;
    this.cards = cards;
  }
}
