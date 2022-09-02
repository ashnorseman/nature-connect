import { Component } from "@angular/core";

import { data } from "../../store";

@Component({
  selector: "app-action-update",
  templateUrl: "./action-update.component.html",
  styleUrls: ["./action-update.component.scss"]
})
export class ActionUpdateComponent {

  public get selectedControllers() {
    return data.selectedControllers;
  }
}
