import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { StoreService } from "../core/services/store/store.service";
import { ContentGroupController } from "../model/content-group-controller";

@Component({
  selector: "app-select-device",
  templateUrl: "./select-device.component.html",
  styleUrls: ["./select-device.component.scss"],
})
export class SelectDeviceComponent {
  constructor (
    private readonly router: Router,
    private readonly store: StoreService,
  ) {}

  public selectDevice(data: Partial<ContentGroupController>) {
    this.store.setCurrent(data);
    this.router.navigate(["/configure"]).then();
  }
}
