import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { ElectronService } from "../electron/electron.service";
import { ContentGroupController } from "../../../model/content-group-controller";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  public contentGroupControllers$: BehaviorSubject<ContentGroupController[]>
    = new BehaviorSubject([]);

  public selectedControllers$: BehaviorSubject<number[]>
    = new BehaviorSubject([]);

  constructor(private readonly electron: ElectronService) {
    this.loadData();
  }

  public loadData() {
    this.electron.loadData("cgc")
      .then((data: ContentGroupController[]) => {
        this.contentGroupControllers$.next(data);
      });
  }

  public saveData(data: ContentGroupController[]) {
    this.electron.saveData("cgc", data)
      .then(() => this.loadData());
  }
}
