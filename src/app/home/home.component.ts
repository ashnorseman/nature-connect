import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { StoreService } from "../core/services/store/store.service";
import { ContentGroupController } from "../model/content-group-controller";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  constructor(
    private readonly router: Router,
    public readonly store: StoreService
  ) {}

  public selectIndividual(event: Event) {
    this.store.selectedControllers$.next([(event as CustomEvent<ContentGroupController>).detail.ip]);

    this.router.navigate(["/configure/configure"]).then();
  }

  public selectShared(event: Event) {
    this.store.selectedControllers$.next((event as CustomEvent<string[]>).detail);
  }
}
