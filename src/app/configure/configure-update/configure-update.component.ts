import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import axios from "axios";

import { StoreService } from "../../core/services/store/store.service";

@Component({
  selector: "app-configure-update",
  templateUrl: "./configure-update.component.html",
  styleUrls: ["./configure-update.component.scss"],
})
export class ConfigureUpdateComponent {
  public uploading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    public readonly store: StoreService,
  ) {}

  public get current$() {
    return this.store.currentController$;
  }

  public cancelUpload() {
    this.uploading$.next(false);
  }

  public startUpload(file: File) {
    const formData = new FormData();

    formData.set("file", file);

    axios.post("/luafirmware", formData).then();

    this.uploading$.next(true);
  }
}
