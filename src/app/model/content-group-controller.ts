/* eslint-disable @typescript-eslint/naming-convention */
export interface ContentGroupRes {

  // e.g.
  // 0.openwrt.pool.ntp.org 1.openwrt.pool.ntp.org 2.openwrt.pool.ntp.org 3.openwrt.pool.ntp.org
  DEVNTP?: string;

  // e.g. 20220908 07:24
  DEVTIME?: string;

  DEVZONE?: string;
  FWVERSION?: string;
  IPCFG?: string;
}

export class ContentGroupController {
  public contentPackage: string;
  public date: string;
  public dns0: string;
  public dns1: string;
  public gateway: string;
  public ip: string;
  public isDhcp: boolean;
  public isNewYorkTime: boolean;
  public mac: string;
  public name: string;
  public ntp0: string;
  public ntp1: string;
  public ntp2: string;
  public password: string;
  public subnetMask: string;
  public time: string;
  public timezone: string;
  public version: string;

  constructor(data: ContentGroupRes = {}) {
    Object.getOwnPropertyNames(data)
      .forEach(key => {
        if (typeof data[key] === "string") {
          data[key] = data[key].trim();
        }
      });

    if (data.DEVNTP) {
      const ntp: string[] = data.DEVNTP
        .split(" ")
        .map(value => value.replace(/\d\./, ""));

      this.ntp0 = ntp[0] || "";
      this.ntp1 = ntp[1] || "";
      this.ntp2 = ntp[2] || "";
    }

    if (data.DEVTIME) {
      this.date = data.DEVTIME
        .replace(/^(\d{4})(\d{2})(\d{2})/, (_, y, m, d) => {
          return `${y}/${m}/${d}`;
        });

      this.time = data.DEVTIME.split(" ")[1];
    }

    this.ip = data.IPCFG;
    this.timezone = data.DEVZONE;
    this.version = data.FWVERSION;
  }
}
