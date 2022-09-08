import { Component } from "@angular/core";
import { Router } from "@angular/router";
import axios from "axios";

import { StoreService } from "../core/services/store/store.service";
import {
  ContentGroupController,
  ContentGroupRes,
} from "../model/content-group-controller";

@Component({
  selector: "app-select-device",
  templateUrl: "./select-device.component.html",
  styleUrls: ["./select-device.component.scss"],
})
export class SelectDeviceComponent {
  constructor(
    private readonly router: Router,
    private readonly store: StoreService,
  ) {}

  public selectDevice(data: Partial<ContentGroupController>) {
    axios.get<ContentGroupRes>("/luadevstatus", {
      params: data,
    })
      .then(res => {
        this.store.setCurrent(new ContentGroupController(res.data));
        this.router
          .navigate(["/configure"])
          .then();
      });
  }
}
