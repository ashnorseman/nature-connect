import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SelectDeviceComponent } from "./select-device.component";

const routes: Routes = [
  {
    path: "select",
    component: SelectDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDeviceRoutingModule {}
