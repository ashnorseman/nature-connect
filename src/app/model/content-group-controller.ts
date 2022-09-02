export class ContentGroupController {
  public id: number;
  public name: string;
  public version: string;
  public mac: string;
  public ip: string;

  constructor(data?: Partial<ContentGroupController>) {
    Object.assign(this, data ?? {});
  }
}
