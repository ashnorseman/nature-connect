import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FileSelector } from "@signify/photon";

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

  public importData(event: Event) {
    const file = event.target as FileSelector;

    file.value.text().then((result: string) => {
      const cgc = JSON.parse(result);

      this.store.saveData(cgc);
    });
  }

  public selectIndividual(event: Event) {
    this.store.selectedControllers$.next([(event as CustomEvent<ContentGroupController>).detail.id]);

    this.router.navigate(["/actions/configure"]).then();
  }

  public selectShared(event: Event) {
    this.store.selectedControllers$.next((event as CustomEvent<number[]>).detail);
  }
}
