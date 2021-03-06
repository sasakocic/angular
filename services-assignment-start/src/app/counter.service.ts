import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;

  constructor() { }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('inactiveToActiveCounter ' + this.inactiveToActiveCounter);
  }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('activeToInactiveCounter ' + this.activeToInactiveCounter);
  }
}
