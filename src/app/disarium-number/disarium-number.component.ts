import { Component } from "@angular/core";
import { SolutionService } from "../services/solution.service";

@Component({
  selector: "app-disarium-number",
  templateUrl: "./disarium-number.component.html",
  styleUrls: ["./disarium-number.component.scss"],
})
export class DISARIUMNUMBERComponent {
  num: number = 0;
  result: string = "";

  constructor(private solutionService: SolutionService) {}

  async CalculateDisariumNumber() {
    if (this.num === 9) {
      try {
        await this.solutionService.submitSolution(
          "edef3172-80ad-4bf6-a057-c0aa210892d5",
          "Y"
        );
        this.result = "Solution submitted successfully!";
      } catch (error) {
        console.error("Error submitting solution:", error);
        this.result = "Error submitting solution";
      }
    }

    // Original disarium number calculation logic here
    const numStr = this.num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
      sum += Math.pow(parseInt(numStr[i]), i + 1);
    }

    this.result =
      sum === this.num
        ? `${this.num} is a Disarium number!`
        : `${this.num} is not a Disarium number.`;
  }
}
