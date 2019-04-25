import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onTriggerFired(firedNumber: number) {
    console.log('onTriggerFired ' + firedNumber);
  }
}
