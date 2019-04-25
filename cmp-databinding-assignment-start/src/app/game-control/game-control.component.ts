import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() trigger = new EventEmitter<number>();
  eventNumber = 0;
  ref: NodeJS.Timer;

  constructor() {
   }

  ngOnInit() {
  }

  onTrigger() {
  }

  onGameStart() {
    // this.trigger = new EventEmitter<{counter: number}>();
    console.log('Game started');
    this.ref = setInterval(() => {
      this.eventNumber++;
      this.trigger.emit(this.eventNumber);
    }, 1000);
  }

  onGameStop() {
    console.log('Game stopped');
    clearInterval(this.ref);
    this.eventNumber = 0;
  }
}
