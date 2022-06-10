import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService } from 'ngx-chess-board';
import { NgxChessBoardView } from 'ngx-chess-board';


//@ViewChild('board', { static: false })
@Component({
  selector: 'app-challange',
  templateUrl: './challange.component.html',
  styleUrls: ['./challange.component.css']
})
export class ChallangeComponent implements OnInit {

  board!: NgxChessBoardView;

  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
  }
  reset() {
    this.board.reset();
  }
}
