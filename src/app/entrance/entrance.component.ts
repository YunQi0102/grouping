import { Component, EventEmitter, Output } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent {
  @Output() drawNum = new EventEmitter<number>();
  inputValue: number | null = null;
  numbers: number[] = Array.from({ length: 18 }, (_, i) => i + 3);

  submitNumber(value: number) {
    this.inputValue = value;
    if (value > 20) {
      const modalElement = document.getElementById('submitModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
      return;
    } else {
      this.drawNum.emit(value);
    }
  }
}
