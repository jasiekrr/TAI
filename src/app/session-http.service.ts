import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CreatePlayerAccountModel } from './models/create-player-account';
import { GamesTable } from './models/games-table';

@Injectable({
  providedIn: 'root'
})
export class SessionHttpService {
  private readonly playerAccountUrl: string = environment.webApiUrl + '/Api';
  constructor(private http: HttpClient) { }

  CreateNewPlayerAccount(createPlayerAccount: CreatePlayerAccountModel): Observable<void>{
    console.log(createPlayerAccount.Email);
    return this.http.post<void>(`${this.playerAccountUrl}/newAccountCreate`, createPlayerAccount);
  }

  GetGamesTable(): Observable<GamesTable[]>{
    return this.http.get<GamesTable[]>(`${this.playerAccountUrl}/gamesList`);
  }
}
