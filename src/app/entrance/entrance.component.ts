import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent {
  @Output() drawNum = new EventEmitter<number>();
  inputValue: number | null = null;

  submitNumber(value: string) {
    const totalNumber = Number(value);
    this.drawNum.emit(totalNumber);
  }
}
