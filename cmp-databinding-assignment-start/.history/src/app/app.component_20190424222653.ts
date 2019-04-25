import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];

  onTriggerFired(firedNumber: number) {
    console.log('onTriggerFired ' + firedNumber);
    this.items.push(firedNumber);
  }
}
