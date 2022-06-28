import { NgModule } from '@angular/core';
import { CartOutlets } from 'feature-libs/cart/base/root';
import { provideOutlet, OutletPosition } from 'projects/storefrontlib/cms-structure';
import { ScheduleLinesComponent } from './components/schedule-lines/schedule-lines.component';
//import { ScheduleLinesModule } from './components/schedule-lines/schedule-lines.module';

@NgModule({
  imports: [
    //ScheduleLinesModule
  ],
  providers: [
    provideOutlet({
      id: CartOutlets.ITEM_DETAILS,
      position: OutletPosition.AFTER,
      component: ScheduleLinesComponent,
    }),
  ],
})
export class S4omRootModule {}
