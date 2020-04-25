import { Injectable } from '@angular/core';
import { SessionUserModel } from '../components/login/models/session-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private key: string = "ng-auth";

  constructor() { }

  get access_token(): string {
    let user = localStorage.getItem(this.key);

    if (user) {
      let objUser = JSON.parse(user);
      return objUser.access_token;
    }

    return null;
  }

  get user(): SessionUserModel {
    let user = localStorage.getItem(this.key);

    if (user) {
      let objUser = JSON.parse(user);
      return objUser.user as SessionUserModel;
    }

    return null;
  }

  get isAuthenticated(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  set(object): void {
    localStorage.setItem(
      this.key,
      JSON.stringify(object)
    );
  }

  destroy(): void {
    localStorage.removeItem(this.key);
  }
}
