export class Confirmation {
  private _user: string;
  private _status: string;

  constructor(user: string, status: string) {
    this._user = user;
    this._status = status;
  }


  get user(): string { return this._user; }

  get status(): string { return this._status; }

}
