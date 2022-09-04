import { Component } from "@angular/core";

import { ContentGroupController } from "../../model/content-group-controller";
import { StoreService } from "../../core/services/store/store.service";

@Component({
  selector: "app-action-configure",
  templateUrl: "./action-configure.component.html",
  styleUrls: ["./action-configure.component.scss"]
})
export class ActionConfigureComponent {
  constructor(
    public readonly store: StoreService
  ) {}

  public get individualData(): ContentGroupController | null {
    if (!this.individualSelected) {
      return null;
    }

    return this.store.contentGroupControllers$.value
      .find(c => c.id === this.store.selectedControllers$.value[0]) || null;
  }

  public get individualSelected(): boolean {
    return this.store.selectedControllers$.value.length === 1;
  }
}
