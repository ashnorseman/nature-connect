import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { ActionsRoutingModule } from "./actions-routing.module";
import { ActionConfigureComponent } from "./action-configure/action-configure.component";
import { ActionUpdateComponent } from "./action-update/action-update.component";

@NgModule({
  declarations: [
    ActionConfigureComponent,
    ActionUpdateComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ActionsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionsModule { }
