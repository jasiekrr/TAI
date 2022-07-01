import { Component, OnInit, ViewChild } from '@angular/core';
import { Chess } from 'chess.ts';
import { GamesTable } from '../models/games-table';
import { SessionHttpService } from '../session-http.service';
//import { ChessBoard } from 'chessboardjs';
//import * as ChessBoard from 'node_modules/chessboardjs/www/js/chessboard.js';
//const ChessBoard = require('node_modules/chessboardjs/www/js/chessboard.js');
@Component({
  selector: 'app-challange',
  templateUrl: './challange.component.html',
  styleUrls: ['./challange.component.css']
})
export class ChallangeComponent implements OnInit {

  //board1= ChessBoard('board1', 'start');
  games: GamesTable[] = [];

  constructor(private sessionHttpService: SessionHttpService) { }

  chess: Chess = new Chess();
  ngOnInit(): void {

    while (!this.chess.gameOver()) {
      const moves = this.chess.moves();
      const move = moves[Math.floor(Math.random() * moves.length)];
      this.chess.move(move);
      }
  }
}
