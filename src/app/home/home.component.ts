import { Component, OnInit } from "@angular/core";

// Add this interface above the class
interface Mission {
  solved: boolean;
  // ... other mission properties
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  missions: Mission[] = [
    // Add your mission data here with solved status
  ];

  constructor() {}

  ngOnInit(): void {}

  isHabitatComplete(): boolean {
    return this.missions.slice(0, 3).every((m) => m.solved);
  }

  isNavigationComplete(): boolean {
    return this.missions.slice(3, 6).every((m) => m.solved);
  }

  isAlienComplete(): boolean {
    return this.missions.slice(6, 9).every((m) => m.solved);
  }
}
