import { ContentGroupController } from "../model/content-group-controller";

export const data: {
  contentGroupControllers: ContentGroupController[];
  selectedControllers: number[];
} = {
  contentGroupControllers: [
    {
      id: 1,
      name: "Content group controller",
      version: "v1.0.0",
      mac: "00:00:5e:00:53:af",
      ip: "192.168.1.20"
    },
    {
      id: 2,
      name: "Content group controller",
      version: "v1.0.0",
      mac: "00:00:5e:00:53:ag",
      ip: "192.168.1.26"
    },
    {
      id: 3,
      name: "Content group controller",
      version: "v1.0.0",
      mac: "00:00:5e:00:53:ah",
      ip: "192.168.1.107"
    },
    {
      id: 4,
      name: "Content group controller",
      version: "v1.0.0",
      mac: "00:00:5e:00:53:ai",
      ip: "192.168.1.18"
    },
  ],
  selectedControllers: [1],
};
