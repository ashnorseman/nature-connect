import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { StoreService } from "../core/services/store/store.service";
import { timezoneDatabase } from "../core/services/store/timezone-database";

@Component({
  selector: "app-configure",
  templateUrl: "./configure.component.html",
  styleUrls: ["./configure.component.scss"]
})
export class ConfigureComponent {
  @ViewChild("configureForm")
  public configureForm: NgForm;

  public timezoneDatabase = timezoneDatabase;

  constructor(
    public readonly store: StoreService
  ) {}

  public get current$() {
    return this.store.currentController$;
  }
}
