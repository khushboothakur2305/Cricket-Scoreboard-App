import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [MatTabsModule,MatCardModule],
  exports: [MatTabsModule,MatCardModule],
})
export class MaterialModuleModule {}
