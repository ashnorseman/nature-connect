import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

import { PageNotFoundComponent } from "./components/";
import { FormControlDirective } from "./directives";

@NgModule({
  declarations: [PageNotFoundComponent, FormControlDirective],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, FormsModule, FormControlDirective],
})
export class SharedModule {}
