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
    setTimeout(() => {
      this.eventNumber += 1;
    }, 1000);
   }

  ngOnInit() {
  }

  onTrigger() {
    this.eventEmitter.emit({currentNumber: this.eventNumber});
  }
}
