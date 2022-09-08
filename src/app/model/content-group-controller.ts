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

  constructor(data?: Partial<ContentGroupController>) {
    Object.assign(this, data ?? {});
  }
}
