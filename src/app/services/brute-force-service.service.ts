import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BruteForceServiceService {
  private baseUrl =
    "https://htf.collide.be/use/c8679b3d-36a2-4888-9745-625776c7706b";
  public attemptsSubject = new Subject<string>();
  public attemptCountSubject = new Subject<number>();
  private triedNumbers: Set<number> = new Set();
  private shouldStop: boolean = false;

  constructor(private http: HttpClient) {}

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private getRandomUntriedNumber(): number | null {
    if (this.triedNumbers.size >= 10000) {
      return null; // All numbers have been tried
    }

    let num;
    do {
      num = Math.floor(Math.random() * 10000);
    } while (this.triedNumbers.has(num));

    this.triedNumbers.add(num);
    return num;
  }

  private simulateAttempt(num: number): Promise<any> {
    return new Promise((resolve) => {
      const formattedNum = num.toString().padStart(4, "0");
      console.log(`Simulating password: ${formattedNum}`);
      this.attemptsSubject.next(`Password ${formattedNum} = false (Simulated)`);
      resolve(null);
    });
  }

  async tryNumber(num: number, isLiveMode: boolean): Promise<any> {
    if (!isLiveMode) {
      return this.simulateAttempt(num);
    }

    const formattedNum = num.toString().padStart(4, "0");
    try {
      console.log(`Trying password: ${formattedNum}`);
      const response = await firstValueFrom(
        this.http.post(`${this.baseUrl}`, null, {
          params: { result: formattedNum },
        })
      );
      console.log("Success Response:", response);
      this.attemptsSubject.next(`Password ${formattedNum} = true`);
      return response;
    } catch (error: any) {
      console.log(`Failed attempt for ${formattedNum}:`, error.error);
      this.attemptsSubject.next(
        `Password ${formattedNum} = false (${
          error.error?.message || "Unknown error"
        })`
      );
      return null;
    }
  }

  stopBruteForce() {
    this.shouldStop = true;
  }

  async startBruteForce(isLiveMode: boolean = false): Promise<string | null> {
    this.triedNumbers.clear();
    this.shouldStop = false;

    while (!this.shouldStop) {
      const nextNum = this.getRandomUntriedNumber();
      if (nextNum === null) {
        return null;
      }

      const result = await this.tryNumber(nextNum, isLiveMode);
      this.attemptCountSubject.next(this.triedNumbers.size);

      if (result) {
        return nextNum.toString().padStart(4, "0");
      }

      await this.delay(100); // Consistent 200ms delay for both modes
    }

    return null;
  }
}
