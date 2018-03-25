import { JWT } from './services/auth.service';

export class User implements UserOptions {

  jwt: JWT;
  name: string;

  constructor(options: UserOptions) {
    this.name = options.name;
    this.jwt = options.jwt;
  }
}

export interface UserOptions {
  name: string;
  jwt?: JWT;
}
