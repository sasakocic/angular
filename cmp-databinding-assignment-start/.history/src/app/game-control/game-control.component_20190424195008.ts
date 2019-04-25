import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  eventNumber: number = 0;
  @Output() eventEmitter = new EventEmitter<{currentNumber: number}>();

  constructor() {
   }

  ngOnInit() {
  }

  setInterval(miliseconds: number) {
    this.eventNumber += 1;
    console.log('Triggered with ' + this.eventNumber);
    this.eventEmitter.emit({currentNumber: this.eventNumber});
    setTimeout(() => {
      this.setInterval(miliseconds);
    }, miliseconds);
  }

  onGameStart() {
    console.log('Game started');
    setTimeout(() => {
      this.setInterval();
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
