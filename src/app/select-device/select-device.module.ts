import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { SelectDeviceRoutingModule } from "./select-device-routing.module";

import { SelectDeviceComponent } from "./select-device.component";

@NgModule({
  declarations: [
    SelectDeviceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SelectDeviceRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectDeviceModule {}
