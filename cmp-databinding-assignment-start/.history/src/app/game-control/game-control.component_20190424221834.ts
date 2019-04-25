import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() trigger = new EventEmitter<number>();
  eventNumber = 0;
  // ref: NodeJS.Timer;
  ref;

  constructor() {
   }

  ngOnInit() {
    this.eventNumber = 1;
  }

  onTrigger() {
  }

  onGameStart() {
    // this.trigger = new EventEmitter<{counter: number}>();
    console.log('Game started');
    this.ref = setInterval(() => {
      console.log('Triggered with ' + this.eventNumber);
      this.eventNumber++;
      this.trigger.emit(this.eventNumber);
    }), 1000);
    this.trigger = new EventEmitter<{counter: number}>();
  }

  onGameStop() {
    console.log('Game stopped');
    clearInterval(this.ref);
    this.eventNumber = 0;
  }
}
