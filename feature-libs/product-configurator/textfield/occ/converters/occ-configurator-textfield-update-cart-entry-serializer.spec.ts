import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ConfiguratorTextfield } from '../../core/model/configurator-textfield.model';
import { OccConfiguratorTextfieldUpdateCartEntrySerializer } from './occ-configurator-textfield-update-cart-entry-serializer';

describe('OccConfiguratorTextfieldUpdateCartEntrySerializer', () => {
  let occConfiguratorUpdateCartEntrySerializer: OccConfiguratorTextfieldUpdateCartEntrySerializer;

  const USER_ID = 'theUser';
  const CART_ID = '98876';
  const LABEL1 = 'LABEL1';
  const VALUE1 = 'VALUE1';
  const TEXTFIELD = 'TEXTFIELD';
  const CART_ENTRY_NUMBER = '2';

  const configuration: ConfiguratorTextfield.Configuration = {
    configurationInfos: [
      {
        configurationLabel: LABEL1,
        configurationValue: VALUE1,
        status: ConfiguratorTextfield.ConfigurationStatus.SUCCESS,
      },
    ],
  };

  const sourceParameters: ConfiguratorTextfield.UpdateCartEntryParameters = {
    userId: USER_ID,
    cartId: CART_ID,
    cartEntryNumber: CART_ENTRY_NUMBER,
    configuration: configuration,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OccConfiguratorTextfieldUpdateCartEntrySerializer],
    });

    occConfiguratorUpdateCartEntrySerializer = TestBed.inject(
      OccConfiguratorTextfieldUpdateCartEntrySerializer as Type<OccConfiguratorTextfieldUpdateCartEntrySerializer>
    );
  });

  it('should convert updateCartEntry parameters', () => {
    const convertedParameters =
      occConfiguratorUpdateCartEntrySerializer.convert(sourceParameters);
    expect(convertedParameters.userId).toEqual(sourceParameters.userId);
    expect(convertedParameters.configurationInfos[0].configuratorType).toEqual(
      TEXTFIELD
    );
    expect(
      convertedParameters.configurationInfos[0].configurationLabel
    ).toEqual(
      sourceParameters.configuration.configurationInfos[0].configurationLabel
    );
  });
});
