import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./shared/components";
import { HomeRoutingModule } from "./home/home-routing.module";
import { ActionsRoutingModule } from "./actions/actions-routing.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    HomeRoutingModule,
    ActionsRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
