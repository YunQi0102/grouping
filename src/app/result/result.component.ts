import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() drawNum!: number;
  @Input() remainingCount!: number;
  @Input() drawnNumbers: number[] = [];
  @Input() totalNumber!: number;
  @Output() nextDraw = new EventEmitter<void>();

  nextNumber() {
    this.nextDraw.emit();
  }

  isDrawn(num: number): boolean {
    return this.drawnNumbers.includes(num);
  }

  getAllNumbers(): number[] {
    return Array.from({ length: this.totalNumber }, (_, i) => i + 1);
  }
}
