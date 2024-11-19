import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import "htf-component";
import { DISARIUMNUMBERComponent } from "./disarium-number/disarium-number.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FirstlastdaymonthComponent } from "./firstlastdaymonth/firstlastdaymonth.component";
import { DecodestringComponent } from "./decodestring/decodestring.component";
import { AncientalgorithmComponent } from "./ancientalgorithm/ancientalgorithm.component";
import { ReversestringComponent } from "./reversestring/reversestring.component";
import { ReplaceStringComponent } from "./replace-string/replace-string.component";
import { BruteForceComponent } from "./brute-force/brute-force.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { StringToHexComponent } from "./string-to-hex/string-to-hex.component";
import { MorseCodeComponent } from "./morse-code/morse-code.component";

@NgModule({
  declarations: [
    AppComponent,
    DISARIUMNUMBERComponent,
    FirstlastdaymonthComponent,
    DecodestringComponent,
    AncientalgorithmComponent,
    ReversestringComponent,
    ReplaceStringComponent,
    BruteForceComponent,
    NavbarComponent,
    StringToHexComponent,
    MorseCodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "mission/disarium-number", component: DISARIUMNUMBERComponent },
      {
        path: "mission/first-last-day-month",
        component: FirstlastdaymonthComponent,
      },
      { path: "mission/decode-string", component: DecodestringComponent },
      {
        path: "mission/ancient-algorithm",
        component: AncientalgorithmComponent,
      },
      { path: "mission/reverse-string", component: ReversestringComponent },
      { path: "mission/replace-string", component: ReplaceStringComponent },
      { path: "mission/brute-force", component: BruteForceComponent },
      { path: "mission/string-to-hex", component: StringToHexComponent },
      { path: "mission/morse-code", component: MorseCodeComponent },
      { path: "", redirectTo: "/mission/disarium-number", pathMatch: "full" }, // Default route
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
