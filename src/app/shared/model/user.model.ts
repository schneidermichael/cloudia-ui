export class User {
  private _id: number;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _password: string;
  private _country: string;

  constructor(id: number, createdAt: Date, updatedAt: Date, firstName: string, lastName: string, email: string, password: string, country: string) {
    this._id = id;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._password = password;
    this._country = country;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }


  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}
