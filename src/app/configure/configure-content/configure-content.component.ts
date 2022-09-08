import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { StoreService } from "../../core/services/store/store.service";

@Component({
  selector: "app-configure-content",
  templateUrl: "./configure-content.component.html",
  styleUrls: ["./configure-content.component.scss"],
})
export class ConfigureContentComponent {
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

  public startUpload() {
    this.uploading$.next(true);
  }
}
