import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { ElectronService } from "../electron/electron.service";
import {
  ContentGroupController,
} from "../../../model/content-group-controller";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  public contentGroupControllers$: BehaviorSubject<ContentGroupController[]>
    = new BehaviorSubject([]);

  public selectedControllers$: BehaviorSubject<string[]>
    = new BehaviorSubject([]);

  public currentController$: BehaviorSubject<ContentGroupController>
    = new BehaviorSubject(new ContentGroupController());

  constructor(private readonly electron: ElectronService) {
    this.loadData();

    this.setCurrent({
      ip: "192.168.0.1"
    });
  }

  public loadData() {
    this.electron.loadData("cgc").then((data: ContentGroupController[]) => {
      this.contentGroupControllers$.next(data);
    });
  }

  public saveData(data: ContentGroupController[]) {
    this.electron.saveData("cgc", data).then(() => this.loadData());
  }

  public setCurrent(data: Partial<ContentGroupController>) {
    data = {
      ...data,
      contentPackage: "0.9.0",
      date: "2022/09/08",
      dns0: "192.168.0.2",
      dns1: "192.168.0.3",
      gateway: "192.168.0.1",
      isDhcp: true,
      isNewYorkTime: false,
      mac: "string",
      name: "string",
      ntp0: "asia.pool.ntp.org",
      ntp1: "europe.pool.ntp.org",
      ntp2: "north-america.pool.ntp.org",
      password: "",
      subnetMask: "255.255.255.0",
      time: "09:36",
      timezone: "Asia/Shanghai",
      version: "1.0.0",
    };

    this.currentController$.next(new ContentGroupController(data));
  }
}
