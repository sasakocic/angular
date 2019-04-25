import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() trigger = new EventEmitter<{counter: number}>();
  eventNumber = 0;
  interval = 0;
  ref: NodeJS.Timer;

  constructor() {
   }

  ngOnInit() {
  }

  onTrigger() {
    console.log('Triggered with ' + this.eventNumber);
    console.log(this.trigger);
    this.eventNumber += 1;
    this.trigger.emit({counter: this.eventNumber});
    if (this.interval > 0) {
      setTimeout(() => {
        this.onTrigger();
      }, this.interval);
    }
  }

  onGameStart() {
    console.log('Game started');
    this.ref = setInterval(this.onTrigger, 1000);
  }

  onGameStop() {
    console.log('Game stopped');
    clearInterval(this.ref);
    this.eventNumber = 0;
  }
}
