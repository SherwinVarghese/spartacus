/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UsageId {
  name: string;
  keys: UsageIdKey[];
}

export interface UsageIdKey {
  name: String;
  value: String;
}
