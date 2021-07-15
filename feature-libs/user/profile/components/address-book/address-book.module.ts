import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AuthGuard,
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  UserAddressService,
} from '@spartacus/core';
import { CardModule, SpinnerModule } from '@spartacus/storefront';
import { AddressBookComponent } from './address-book.component';
import { AddressFormModule } from './address-form/address-form.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    AddressFormModule,
    SpinnerModule,
    I18nModule,
  ],
  declarations: [AddressBookComponent],
  exports: [AddressBookComponent],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        AccountAddressBookComponent: {
          component: AddressBookComponent,
          guards: [AuthGuard],
        },
      },
    }),
    UserAddressService,
  ],
})
export class AddressBookModule {}
