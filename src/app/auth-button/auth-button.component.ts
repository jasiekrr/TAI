import { Component } from '@angular/core';
//import { HTTP_PROVIDERS } from '@angular/http';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { CreatePlayerAccountModel } from '../models/create-player-account';
import { SessionHttpService } from '../session-http.service';

@Component({
  selector: 'app-auth-button',
  template: '<button class="btn-primary btn-block" (click)="saveNewUser();">Log in</button>',
  providers: [SessionHttpService]
})
export class AuthButtonComponent {

  public auth: AuthService;
  profileJson!: string;

  constructor(auth: AuthService, private sessionHttpService: SessionHttpService) {
    this.auth = auth;
  }

  saveNewUser(): void {
    this.auth.loginWithRedirect();

    /*this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    )*/
  }

  
}
