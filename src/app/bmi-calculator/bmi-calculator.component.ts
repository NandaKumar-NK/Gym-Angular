import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BMICalculatorComponent {
  weight!: number;
  height!: number;
  bmi!: number;

  calculateBMI() {
    if (this.weight && this.height) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
      this.bmi = parseFloat(this.bmi.toFixed(2)); // Round to 2 decimal places
    } else {
      this.bmi = 0;
    }
  }
}


