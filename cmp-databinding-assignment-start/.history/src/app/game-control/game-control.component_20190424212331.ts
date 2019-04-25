import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() trigger = new EventEmitter<{counter: number}>();
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  eventNumber = 0;
  ref: NodeJS.Timer;

  constructor() {
   }

  ngOnInit() {
    this.eventNumber = 1;
  }

  onTrigger() {
    console.log('Triggered with ' + this.eventNumber);
    this.trigger = new EventEmitter<{counter: number}>();
    console.log(this.trigger);
    console.log(this.serverCreated);
    this.eventNumber += 1;
    this.trigger.emit({counter: this.eventNumber});
  }

  onGameStart() {
    // this.trigger = new EventEmitter<{counter: number}>();
    console.log('Game started');
    this.ref = setInterval(this.onTrigger, 1000);
  }

  onGameStop() {
    console.log('Game stopped');
    clearInterval(this.ref);
    this.eventNumber = 0;
  }
}
