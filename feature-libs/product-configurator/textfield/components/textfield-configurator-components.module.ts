import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { ConfiguratorTextfieldAddToCartButtonComponent } from './add-to-cart-button/configurator-textfield-add-to-cart-button.component';
import { ConfiguratorTextfieldFormComponent } from './form/configurator-textfield-form.component';
import { ConfiguratorTextfieldInputFieldComponent } from './input-field/configurator-textfield-input-field.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    I18nModule,
    UrlModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        TextfieldConfigurationForm: {
          component: ConfiguratorTextfieldFormComponent,
        },
      },
    }),
  ],
  declarations: [
    ConfiguratorTextfieldFormComponent,
    ConfiguratorTextfieldInputFieldComponent,
    ConfiguratorTextfieldAddToCartButtonComponent,
  ],
  exports: [
    ConfiguratorTextfieldFormComponent,
    ConfiguratorTextfieldInputFieldComponent,
    ConfiguratorTextfieldAddToCartButtonComponent,
  ],
})
export class TextfieldConfiguratorComponentsModule {}
