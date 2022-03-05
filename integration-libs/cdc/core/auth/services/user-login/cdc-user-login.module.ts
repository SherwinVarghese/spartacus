import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginFormComponentService } from 'feature-libs/user/account/components/login-form';
import { CdcJsService } from 'integration-libs/cdc/root';
import { AuthService } from 'projects/core/src/auth';
import { GlobalMessageService } from 'projects/core/src/global-message';
import { WindowRef } from 'projects/core/src/window';
import { CdcLoginComponentService } from './cdc-user-login.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: LoginFormComponentService,
      useClass: CdcLoginComponentService,
      deps: [AuthService, GlobalMessageService, WindowRef, CdcJsService],
    },
  ],
})
export class CdcUserLoginModule {}
