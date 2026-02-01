import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() drawNum!: number;
  @Input() remainingCount!: number;
  @Output() nextDraw = new EventEmitter<void>();

  nextNumber() {
    this.nextDraw.emit();
  }
}
