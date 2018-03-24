import { Injectable } from '@angular/core';
import { MyMICDS } from '../../../node_modules/@mymicds/sdk/src/sdk';

@Injectable()
export class AuthService {

  MyMICDS: MyMICDS;

  constructor() {
    this.MyMICDS = new MyMICDS();
  }

  login(username: string, password: string, remember: boolean) {
    return this.MyMICDS.auth.login({ user: username, password });
  }

  logout(username: string) {
    return this.MyMICDS.auth.logout({ user: username });
  }
}
