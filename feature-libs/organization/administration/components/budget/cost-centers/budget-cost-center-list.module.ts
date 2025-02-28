/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubListModule } from '../../shared/sub-list/sub-list.module';
import { BudgetCostCenterListComponent } from './budget-cost-center-list.component';

@NgModule({
  imports: [CommonModule, SubListModule],
  declarations: [BudgetCostCenterListComponent],
})
export class BudgetCostCenterListModule {}
