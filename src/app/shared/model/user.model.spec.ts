import { User } from "./user.model";
import { environment } from "../../../environments/environment";

describe('User class tests', () => {
    let user: User;
    let id : number = 1;
    let createdAt : Date = new Date();
    let updatedAt : Date = new Date();
    let title : string = 'BSc';
    let firstName : string = 'Max';
    let lastName : string = 'Mustermann';
    let email: string = 'max.mustermann@email.com';
    let password: string = environment.password;

    beforeEach(() => {
        user = new User(id, createdAt, updatedAt, title, firstName, lastName, email, password);
    });

    it('should have a valid constuctor', () => {
        expect(user).not.toBeNull();
    });

    it('should set email correctly through constructor', () => {
        expect(user.email).toEqual(email);
    });

    it('should set password correctly through constructor', () => {
        expect(user.password).toEqual(password);
    });

    it('should get and set email correctly', () => {
        user.email = 'change@email.com';
        expect(user.email).toEqual('change@email.com');
    });
      it('should get and set password correctly', () => {
        user.password = environment.passwordChanged;
        expect(user.password).toEqual('Mimi43');
    });

});
