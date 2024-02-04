import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-roll',
  templateUrl: './num-roll.component.html',
  styleUrl: './num-roll.component.css'
})
export class NumRollComponent implements OnInit {
  setValue: number = 0
  totalValue: number = this.setValue
  
  ngOnInit(): void {
    const storedNumbersString = localStorage.getItem('totalValue');
    console.log("value: " + storedNumbersString)
    if (storedNumbersString !== null) {
      const storedNumber = JSON.parse(storedNumbersString);
      this.totalValue = storedNumber;
    } else {
      this.totalValue = this.setValue;
    }
  }
 

  handleButtonClick(buttonValue: number): void {
    this.totalValue = this.totalValue + buttonValue;
    const numbersString = JSON.stringify(this.totalValue);
    localStorage.setItem('totalValue', numbersString);
    console.log('Button clicked:', buttonValue);
  }
}
