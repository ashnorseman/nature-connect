import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActionConfigureComponent } from "./action-configure/action-configure.component";
import { ActionUpdateComponent } from "./action-update/action-update.component";

const routes: Routes = [
  {
    path: "actions",
    children: [
      {
        path: "configure",
        component: ActionConfigureComponent
      },
      {
        path: "update",
        component: ActionUpdateComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "configure",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule { }
