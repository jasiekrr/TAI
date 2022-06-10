import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { ChallangeComponent } from './challange/challange.component';
import { HotSeatComponent } from './hot-seat/hot-seat.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

import { NgxChessBoardModule } from "ngx-chess-board";

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Puzzles', component: PuzzlesComponent },
  { path: 'Challange', component: ChallangeComponent },
  { path: 'Hot', component: HotSeatComponent },
  { path: 'Multiplayer', component: MultiplayerComponent },
  { path: 'account', component: AccountComponent },
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    NgxChessBoardModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
