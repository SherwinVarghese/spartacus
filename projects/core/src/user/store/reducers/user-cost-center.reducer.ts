/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CostCenter } from '../../../model/org-unit.model';
import { UserActions } from '../actions/index';

export const initialState: CostCenter[] = [];

export function reducer(
  state = initialState,
  action: UserActions.UserCostCenterAction
): CostCenter[] {
  switch (action.type) {
    case UserActions.LOAD_ACTIVE_COST_CENTERS_FAIL: {
      return initialState;
    }

    case UserActions.LOAD_ACTIVE_COST_CENTERS_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }
  }
  return state;
}
