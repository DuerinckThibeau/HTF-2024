import { Component } from "@angular/core";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: {
    current: number;
    total: number;
  };
}

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.scss"],
})
export class AchievementsComponent {
  achievements: Achievement[] = [
    {
      id: "first_mission",
      name: "First Steps on Mars",
      description: "Complete your first mission",
      icon: "assets/MARS.png",
      unlocked: true,
    },
    {
      id: "habitat_master",
      name: "Habitat Constructor",
      description: "Complete all Habitat Construction missions",
      icon: "assets/SHELTER_BADGE.svg",
      unlocked: true,
    },
    {
      id: "speed_solver",
      name: "Quick Thinker",
      description: "Solve any mission in under 1 minute",
      icon: "assets/speed-badge.svg",
      unlocked: true,
    },
    {
      id: "mission_streak",
      name: "Mission Streak",
      description: "Complete 3 missions in a row without errors",
      icon: "assets/streak-badge.svg",
      unlocked: true,
    },
    {
      id: "navigation_master",
      name: "Navigation",
      description: "Complete all Navigation missions",
      icon: "assets/NAVIGATION_BADGE.svg",
      unlocked: true,
    },
    {
      id: "alien_master",
      name: "Alien Encounters",
      description: "Complete all Alien Encounter missions",
      icon: "assets/ALIEN_ENCOUNTER_BADGE.svg",
      unlocked: true,
    },
    {
      id: "code_master",
      name: "Code Master",
      description: "Complete all missions in the game",
      icon: "assets/master-badge.svg",
      unlocked: true,
      progress: {
        current: 9,
        total: 9,
      },
    },
  ];
}
