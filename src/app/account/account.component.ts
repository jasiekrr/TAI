import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { CreatePlayerAccountModel } from '../models/create-player-account';
import { SessionHttpService } from '../session-http.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  profileJsonString!: string;
  profileJson!: JSON;
  createNewPlayer: CreatePlayerAccountModel | any;

  constructor(public auth: AuthService, private sessionHttpService: SessionHttpService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile: any) => (this.profileJsonString = JSON.stringify(profile,null,2))
    )

    this.auth.user$.subscribe((user: any) => {
      this.createNewPlayer = {
        Name: user.nickname,
        Email: user.email
      };
      const subscription = this.sessionHttpService.CreateNewPlayerAccount(this.createNewPlayer).subscribe();
    })
  }
  
}
