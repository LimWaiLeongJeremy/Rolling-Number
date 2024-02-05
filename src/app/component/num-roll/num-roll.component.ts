import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from "@angular/forms";


@Component({
  selector: 'app-num-roll',
  templateUrl: './num-roll.component.html',
  styleUrl: './num-roll.component.css'
})
export class NumRollComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}
  actualNumForm!: FormGroup;
  totalValue: number = 0
  projectCount: number = 0;
  projectCountStop: any 
  inputValue: number = 0 

  
  ngOnInit(): void {
    this.actualNumForm = this.formBuilder.group({
      actualNumInput: new FormControl (null, [Validators.min(0)]),    
    });
    
    const storedNumbersString = localStorage.getItem('totalValue');
    console.log("value: " + storedNumbersString)
    if (storedNumbersString !== null) {
      const storedNumber = JSON.parse(storedNumbersString);
      this.totalValue = storedNumber;
    } else {
      this.totalValue = 0;
    }
    this.projectCountRolling();
    
    this.actualNumForm.get('actualNumInput')?.valueChanges.subscribe( val => {
      if(val > 0 && val > this.totalValue){
        clearInterval(this.projectCountStop);
        this.totalValue = val;
        const numbersString = JSON.stringify(this.totalValue);
        localStorage.setItem('totalValue', numbersString);
        this.projectCountRolling();

      }
    })
  }

  projectCountRolling(): void {
    this.projectCountStop = setInterval(() =>{
    
      if (this.projectCount < this.totalValue) {
        this.projectCount += 70;
      } else {
        clearInterval(this.projectCountStop);
      }
    }, 200)
  }

  onSubmit(){

  }

  clearInput() {
    this.inputValue = 0;

  }
}
