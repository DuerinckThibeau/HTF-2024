import { Component, OnInit } from "@angular/core";
import { BruteForceServiceService } from "../services/brute-force-service.service";

@Component({
  selector: "app-brute-force",
  templateUrl: "./brute-force.component.html",
  styleUrls: ["./brute-force.component.scss"],
})
export class BruteForceComponent {
  attempts: string[] = [];
  isRunning: boolean = false;
  attemptCount: number = 0;
  isLiveMode: boolean = false;

  constructor(private bruteForceService: BruteForceServiceService) {}

  async startBruteForce() {
    this.attempts = [];
    this.isRunning = true;
    this.attemptCount = 0;

    const attemptsSubscription =
      this.bruteForceService.attemptsSubject.subscribe((attempt) => {
        this.attempts.unshift(attempt);
      });

    const countSubscription =
      this.bruteForceService.attemptCountSubject.subscribe((count) => {
        this.attemptCount = count;
      });

    const result = await this.bruteForceService.startBruteForce(
      this.isLiveMode
    );

    if (result) {
      this.attempts.unshift(`Success! The password is: ${result}`);
    } else {
      this.attempts.unshift("Stopped or no valid password found");
    }

    this.isRunning = false;
    attemptsSubscription.unsubscribe();
    countSubscription.unsubscribe();
  }

  stopBruteForce() {
    this.bruteForceService.stopBruteForce();
    this.attemptCount = 0;
    this.attempts.unshift("Operation aborted by user");
  }
}
