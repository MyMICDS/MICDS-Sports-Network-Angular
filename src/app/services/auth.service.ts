import { Injectable } from '@angular/core';
import { MyMICDS, MyMICDSOptions } from '@mymicds/sdk';
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../user';

@Injectable()
export class AuthService {

  MyMICDS: MyMICDS;
  user$: Observable<User>;

  jwtHelper = new JwtHelperService();

  constructor() {
    const that = this;
    const options: Partial<MyMICDSOptions> = {
      baseURL: 'http://localhost:1420',
    };

    this.MyMICDS = new MyMICDS();

    this.user$ = this.MyMICDS.auth.auth$.map(snapshot => {
      return snapshot.jwt ?
        new User({ name: snapshot.jwt.user, jwt: snapshot.jwt }) : undefined;
    });
  }

  login(username: string, password: string, remember: boolean) {
    return this.MyMICDS.auth.login({ user: username, password })
      .map(res => {
        const parsed: JWT = this.jwtHelper.decodeToken(res.jwt);
        // use user service instead
        return new User({ name: parsed.user, jwt: parsed });
      });
  }

  logout(username: string) {
    return this.MyMICDS.auth.logout();
  }
}

// Hopefully sdk can support JWT parsing
export interface JWT {
  user: string;
  scope: string[];
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  sub: string;
}
