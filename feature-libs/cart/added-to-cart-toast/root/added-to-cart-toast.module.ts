import { NgModule } from '@angular/core';
import { AddedToCartToastComponentsModule } from '../components/added-to-cart-toast-components.module';
import { AddedToCartToastCoreModule } from '../core/added-to-cart-toast-core.module';

@NgModule({
  imports: [AddedToCartToastComponentsModule, AddedToCartToastCoreModule],
})
export class AddedToCartToastModule {}
