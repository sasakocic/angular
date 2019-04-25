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
    this.eventNumber = 1;
  }

  onTrigger() {
    console.log('Triggered with ' + this.eventNumber);
    console.log(this.trigger);
    console.log(this.serverCreated);
    this.eventNumber += 1;
    this.trigger.emit(this.eventNumber);
  }

  onGameStart() {
    // this.trigger = new EventEmitter<{counter: number}>();
    console.log('Game started');
    this.ref = setInterval(this.onTrigger, 1000);
    this.trigger = new EventEmitter<{counter: number}>();
  }

  onGameStop() {
    console.log('Game stopped');
    clearInterval(this.ref);
    this.eventNumber = 0;
  }
}
