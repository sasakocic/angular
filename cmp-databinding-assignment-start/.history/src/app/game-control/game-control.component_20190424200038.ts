import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  eventNumber: number = 0;
  interval = 0;
  ref;

  @Output() eventEmitter = new EventEmitter<{currentNumber: number}>();

  constructor() {
   }

  ngOnInit() {
  }

  setInterval(miliseconds: number) {
    this.interval = miliseconds;
  }

  clearInterval() {
    this.interval = 0;
  }

  onTrigger() {
    console.log('Triggered with ' + this.eventNumber);
    this.eventEmitter.emit({currentNumber: this.eventNumber});
    if (this.interval > 0) {
      setTimeout(() => {
        this.onTrigger();
      }, this.interval);
    }
  }

  onGameStart() {
    console.log('Game started');
    this.ref = function() { this.onTrigger(); };
    setInterval(, 1000);
    setTimeout(() => {
      this.clearInterval();
    }, 1000);
  }

  onGameStop() {
    console.log('Game stopped');
    this.eventNumber = 0;
    setTimeout(() => {
      this.setInterval();
    }, 1000);
  }
}
