/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BASE_PAGE_META_RESOLVER,
  CMS_SERVICE,
  CONTENT_PAGE_META_RESOLVER,
  ROUTING_PAGE_META_RESOLVER,
  TRANSLATION_SERVICE,
} from '../../../../shared/constants';
import { SPARTACUS_CORE } from '../../../../shared/libs-constants';
import { ConstructorDeprecation } from '../../../../shared/utils/file-utils';

export const CONTENT_PAGE_META_RESOLVER_MIGRATION_V1: ConstructorDeprecation = {
  class: CONTENT_PAGE_META_RESOLVER,
  importPath: SPARTACUS_CORE,
  deprecatedParams: [
    { className: CMS_SERVICE, importPath: SPARTACUS_CORE },
    { className: TRANSLATION_SERVICE, importPath: SPARTACUS_CORE },
    { className: ROUTING_PAGE_META_RESOLVER, importPath: SPARTACUS_CORE },
  ],
  removeParams: [
    { className: CMS_SERVICE, importPath: SPARTACUS_CORE },
    { className: TRANSLATION_SERVICE, importPath: SPARTACUS_CORE },
    { className: ROUTING_PAGE_META_RESOLVER, importPath: SPARTACUS_CORE },
  ],
  addParams: [
    { className: BASE_PAGE_META_RESOLVER, importPath: SPARTACUS_CORE },
  ],
};

export const CONTENT_PAGE_META_RESOLVER_MIGRATION_V2: ConstructorDeprecation = {
  class: CONTENT_PAGE_META_RESOLVER,
  importPath: SPARTACUS_CORE,
  deprecatedParams: [
    { className: CMS_SERVICE, importPath: SPARTACUS_CORE },
    { className: TRANSLATION_SERVICE, importPath: SPARTACUS_CORE },
    { className: ROUTING_PAGE_META_RESOLVER, importPath: SPARTACUS_CORE },
    { className: BASE_PAGE_META_RESOLVER, importPath: SPARTACUS_CORE },
  ],
  removeParams: [
    { className: CMS_SERVICE, importPath: SPARTACUS_CORE },
    { className: TRANSLATION_SERVICE, importPath: SPARTACUS_CORE },
    { className: ROUTING_PAGE_META_RESOLVER, importPath: SPARTACUS_CORE },
  ],
};
