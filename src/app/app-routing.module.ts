import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./shared/components";
import { HomeRoutingModule } from "./home/home-routing.module";
import { ConfigureRoutingModule } from "./configure/configure-routing.module";
import {
  SelectDeviceRoutingModule,
} from "./select-device/select-device-routing.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "select",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    HomeRoutingModule,
    SelectDeviceRoutingModule,
    ConfigureRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
