import {Confirmation} from "./confirmation.model";
import {environment} from "../../../environments/environment";

describe('Confirmation class tests', () => {
  let confirmation: Confirmation;
  let user: string = "karim.schierbauer@outlook.com";
  let status: string = "isActivated";
  
  beforeEach(() => {
    confirmation = new Confirmation(user, status);
  });

  it('should have a valid constuctor', () => {
    expect(confirmation).not.toBeNull();
  });

  it('should get user correctly', () => {
    expect(confirmation.user).toEqual(user);
  });

  it('should get status correctly ', () => {
    expect(confirmation.status).toEqual(status);
  });

});
