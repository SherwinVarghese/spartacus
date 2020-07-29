import { user } from '../../../../sample-data/checkout-flow';
import { fillShippingAddress } from '../../../commons/checkout/checkout-forms';
import { checkoutNextStep, verifyTabbingOrder } from '../../tabbing-order';
import { TabElement } from '../../tabbing-order.model';

const containerSelector = '.MultiStepCheckoutSummaryPageTemplate';

export function checkoutShippingAddressNewTabbingOrder(config: TabElement[]) {
  cy.visit('/checkout/shipping-address');

  const { firstName, lastName, phone, address } = user;
  fillShippingAddress({ firstName, lastName, phone, address }, false);

  verifyTabbingOrder(containerSelector, config);
  checkoutNextStep('/checkout/delivery-mode');
}

export function checkoutShippingAddressExistingTabbingOrder(
  config: TabElement[]
) {
  cy.visit('/checkout/shipping-address');

  verifyTabbingOrder(containerSelector, config);
}
