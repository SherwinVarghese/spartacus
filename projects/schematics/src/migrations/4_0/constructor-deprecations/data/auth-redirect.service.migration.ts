/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ANGULAR_ROUTER,
  AUTH_FLOW_ROUTES_SERVICE,
  AUTH_REDIRECT_SERVICE,
  AUTH_REDIRECT_STORAGE_SERVICE,
  ROUTER,
  ROUTING_SERVICE,
} from '../../../../shared/constants';
import { SPARTACUS_CORE } from '../../../../shared/libs-constants';
import { ConstructorDeprecation } from '../../../../shared/utils/file-utils';

export const AUTH_REDIRECT_SERVICE_MIGRATION: ConstructorDeprecation = {
  // projects/core/src/auth/user-auth/services/auth-redirect.service.ts
  class: AUTH_REDIRECT_SERVICE,
  importPath: SPARTACUS_CORE,
  deprecatedParams: [
    {
      className: ROUTING_SERVICE,
      importPath: SPARTACUS_CORE,
    },
    {
      className: ROUTER,
      importPath: ANGULAR_ROUTER,
    },
    {
      className: AUTH_REDIRECT_STORAGE_SERVICE,
      importPath: SPARTACUS_CORE,
    },
  ],
  addParams: [
    {
      className: AUTH_FLOW_ROUTES_SERVICE,
      importPath: SPARTACUS_CORE,
    },
  ],
};
