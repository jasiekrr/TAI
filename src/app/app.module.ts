import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { ChallangeComponent } from './challange/challange.component';
import { HotSeatComponent } from './hot-seat/hot-seat.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { SessionHttpService } from './session-http.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ChessBoard } from 'chessboardjs';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Puzzles', component: PuzzlesComponent },
  { path: 'Challange', component: ChallangeComponent },
  { path: 'Hot', component: HotSeatComponent },
  { path: 'Multiplayer', component: MultiplayerComponent },
  { path: 'account', component: AccountComponent, canActivate:[AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PuzzlesComponent,
    ChallangeComponent,
    HotSeatComponent,
    MultiplayerComponent,
    AccountComponent,
    HomeComponent,
    AuthButtonComponent,
    LogoutButtonComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot({
      domain: 'dev-iexefn1d.us.auth0.com',
      clientId: 'u3ZGKFRBxDzdnnwRlJBYqaUhK6uxlEQz'
    }),
  ],
  providers: [
    SessionHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
