import { Component } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  team = {
    name: "Jawas",
    members: [
      {
        name: "Rob Willemsen",
        role: "Developer",
        github: "https://github.com/Robdeklimmer",
        linkedin: "https://www.linkedin.com/in/rob-willemsen-910a49215/",
      },
      {
        name: "Thibeau Duerinck",
        role: "Developer",
        github: "https://github.com/DuerinckThibeau",
        linkedin: "https://www.linkedin.com/in/thibeau-duerinck-93b755234/",
      },
    ],
  };
}
