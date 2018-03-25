import { Injectable } from '@angular/core';
import { MyMICDS, MyMICDSOptions } from '@mymicds/sdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../user';

@Injectable()
export class AuthService {

  MyMICDS: MyMICDS;
  user$: BehaviorSubject<User>;

  constructor(private jwtHelper: JwtHelperService) {
    this.user$ = new BehaviorSubject(null);

    const that = this;
    const options: Partial<MyMICDSOptions> = {
      jwtSetter(jwt: string, remember: boolean) {
        const parsed: JWT = jwtHelper.decodeToken(jwt);
        that.user$.next(new User({ name: parsed.user, jwt: parsed }));
        if (remember) {
            localStorage.setItem('jwt', jwt);
        } else {
            sessionStorage.setItem('jwt', jwt);
        }
      }
    };

    this.MyMICDS = new MyMICDS();
  }

  login(username: string, password: string, remember: boolean) {
    return this.MyMICDS.auth.login({ user: username, password })
      .map(res => {
        // use user service instead
        return new User({ name: res.jwt.user, jwt: res.jwt });
      });
  }

  logout(username: string) {
    return this.MyMICDS.auth.logout({ user: username });
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
