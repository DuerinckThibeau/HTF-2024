import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SolutionService {
  private baseUrl = "https://htf.collide.be/use";

  constructor(private http: HttpClient) {}

  async submitSolution(id: string, result: string): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.http.post(`${this.baseUrl}/${id}`, null, {
          params: { result: "Y" },
        })
      );
      console.log("Solution submitted successfully:", response);
      return response;
    } catch (error) {
      console.error("Error submitting solution:", error);
      throw error;
    }
  }
}
