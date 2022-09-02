import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { data } from "../store";
import { ContentGroupController } from "../model/content-group-controller";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  public contentGroupControllers = data.contentGroupControllers;

  constructor(private readonly router: Router) {}

  public get selectedControllers() {
    return data.selectedControllers;
  }

  public selectIndividual(event: Event) {
    data.selectedControllers = [(event as CustomEvent<ContentGroupController>).detail.id];

    this.router.navigate(["/actions/configure"]).then();
  }

  public selectShared(event: Event) {
    data.selectedControllers = (event as CustomEvent<number[]>).detail;
  }
}
