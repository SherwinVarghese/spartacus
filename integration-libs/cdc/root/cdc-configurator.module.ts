import { NgModule } from "@angular/core";
import { CdcUserLoginModule } from "../core/auth/services/user-login/cdc-user-login.module";
import { CdcUserRegisterModule } from "../core/auth/services/user-registration/cdc-user-register.module";

@NgModule({
  imports: [CdcUserRegisterModule, CdcUserLoginModule],
})
export class CdcConfiguratorModule {}
