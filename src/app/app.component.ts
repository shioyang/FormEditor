import { Component } from '@angular/core';

import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './template/app.component.html',
  styleUrls: ['./style/app.component.css']
})
export class AppComponent {
  action: string = "";

  onAction(event: string): void {
    this.action = event;
  }
}
