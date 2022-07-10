import {User} from "./user.model";
import {environment} from "../../../environments/environment";

describe('User class tests', () => {
  let user: User;
  let id: number = 1;
  let createdAt: Date = new Date('2021-12-17T03:24:00');
  let updatedAt: Date = new Date('2020-12-17T03:24:00');
  let firstName: string = 'Max';
  let lastName: string = 'Mustermann';
  let email: string = 'max.mustermann@email.com';
  let password: string = environment.password;
  let country: string = 'Austria';

  beforeEach(() => {
    user = new User(id, createdAt, updatedAt, firstName, lastName, email, password, country);
  });

  it('should have a valid constuctor', () => {
    expect(user).not.toBeNull();
  });

  it('should get id correctly', () => {
    expect(user.id).toEqual(id);
  });

  it('should get createdAt correctly ', () => {
    expect(user.createdAt).toEqual(createdAt);
  });

  it('should get updatedAt correctly ', () => {
    expect(user.updatedAt).toEqual(updatedAt);
  });

  it('should get firstName correctly ', () => {
    expect(user.firstName).toEqual(firstName);
  });

  it('should get lastName correctly ', () => {
    expect(user.lastName).toEqual(lastName);
  });

  it('should get email correctly', () => {
    expect(user.email).toEqual(email);
  });

  it('should get password correctly', () => {
    expect(user.password).toEqual(password);
  });

  it('should set id correctly', () => {
    user.id = 30
    expect(user.id).toEqual(30);
  });

  it('should set createdAt correctly ', () => {
    user.createdAt = new Date('2019-12-17T03:24:00');
    expect(user.createdAt).toEqual(new Date('2019-12-17T03:24:00'));
  });

  it('should set updatedAt correctly ', () => {
    user.updatedAt = new Date('2018-12-17T03:24:00');
    expect(user.updatedAt).toEqual(new Date('2018-12-17T03:24:00'));
  });

  it('should set firstName correctly ', () => {
    user.firstName = 'John';
    expect(user.firstName).toEqual('John');
  });

  it('should set lastName correctly', () => {
    user.lastName = 'Doe';
    expect(user.lastName).toEqual('Doe');
  });

  it('should set email correctly', () => {
    user.email = 'change@email.com';
    expect(user.email).toEqual('change@email.com');
  });
  it('should set password correctly', () => {
    user.password = environment.passwordChanged;
    expect(user.password).toEqual('Mimi43');
  });


});
