import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { ConfigureRoutingModule } from "./configure-routing.module";
import { ConfigureComponent } from "./configure.component";
import {
  ConfigureUpdateComponent,
} from "./configure-update/configure-update.component";
import {
  ConfigureContentComponent,
} from "./configure-content/configure-content.component";

@NgModule({
  declarations: [
    ConfigureComponent,
    ConfigureUpdateComponent,
    ConfigureContentComponent,
  ],
  imports: [
    CommonModule,
    ConfigureRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConfigureModule {}
