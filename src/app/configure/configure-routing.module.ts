import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  ConfigureContentComponent
} from "./configure-content/configure-content.component";

import {
  ConfigureUpdateComponent
} from "./configure-update/configure-update.component";
import { ConfigureComponent } from "./configure.component";

const routes: Routes = [
  {
    path: "configure",
    component: ConfigureComponent
  },
  {
    path: "configure/update",
    component: ConfigureUpdateComponent
  },
  {
    path: "configure/content",
    component: ConfigureContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigureRoutingModule { }
