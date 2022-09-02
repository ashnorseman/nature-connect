import { Component } from "@angular/core";

import { data } from "../../store";
import {ContentGroupController} from "../../model/content-group-controller";

@Component({
  selector: "app-action-configure",
  templateUrl: "./action-configure.component.html",
  styleUrls: ["./action-configure.component.scss"]
})
export class ActionConfigureComponent {

  public get selectedControllers() {
    return data.selectedControllers;
  }

  public get individualData(): ContentGroupController | null {
    if (!this.individualSelected) {
      return null;
    }

    return data.contentGroupControllers
      .find(c => c.id === this.selectedControllers[0]) || null;
  }

  public get individualSelected(): boolean {
    return this.selectedControllers.length === 1;
  }
}
