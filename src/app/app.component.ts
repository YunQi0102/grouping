import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toResult: boolean = false;
  drawNum: number = 0;
  totalNumber: number = 0;
  drawnNumbers: number[] = [];

  getNum(value: number) {
    this.drawNum = value;
    this.totalNumber = value;
    this.drawNextNumber();
  }

  drawNextNumber() {
    // 檢查是否還有號碼可抽
    if (this.drawnNumbers.length == this.totalNumber) {
      this.reset();
      return;
    }

    // 建立可用號碼陣列
    const availableNumbers = [];
    for (let i = 1; i <= this.totalNumber; i++) {
      if (!this.drawnNumbers.includes(i)) {
        availableNumbers.push(i);
      }
    }

    // 從可用號碼中隨機抽取
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    this.drawNum = availableNumbers[randomIndex];
    this.drawnNumbers.push(this.drawNum);
    this.toResult = true;
  }

  reset() {
    this.toResult = false;
    this.drawNum = 0;
    this.totalNumber = 0;
    this.drawnNumbers = [];
  }
}
