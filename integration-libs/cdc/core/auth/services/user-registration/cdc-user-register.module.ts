import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRegisterFacade } from 'feature-libs/user/profile/root';
import { CDCUserRegisterService } from './cdc-user-register.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
        provide: UserRegisterFacade,
        useExisting: CDCUserRegisterService
    },
  ],
})
export class CdcUserRegisterModule {}
