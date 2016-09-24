import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import '../../public/css/styles.css';

@Component({
  selector: 'fe-toolbar',
  templateUrl: './template/fe-toolbar.component.html',
  styleUrls: ['./style/fe-toolbar.component.css']
})
export class FeToolbarComponent {
  @Output() emitter: EventEmitter<any> = new EventEmitter();

  onClick(action: string): void {
    this.emitter.emit(action);
  }
}
