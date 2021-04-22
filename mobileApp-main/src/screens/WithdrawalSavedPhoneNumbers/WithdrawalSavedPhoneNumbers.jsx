import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import SavedPhoneNumbers from 'components/SavedPhoneNumbers';

import { ANALYTICS_EVENTS, MOBILE_MONEY_FLOW } from 'helpers/constants';
import amplitudeInstance from 'helpers/amplitude.helper';

function WithdrawalSavedPhoneNumbers({ navigation }) {
  useEffect(() => {
    amplitudeInstance.logEvent(ANALYTICS_EVENTS.TRANSFER_SELECT_TYPE, {
      Type: 'Withdrawal - Mobile Money',
    });
  }, []);

  const handleConfirm = useCallback(() => {
    navigation.navigate('WithdrawalMobileMoney');
  }, [navigation]);

  return (
    <SavedPhoneNumbers
      handleConfirm={handleConfirm}
      navigation={navigation}
      phoneflow={MOBILE_MONEY_FLOW.WITHDRAWAL}
    />
  );
}

WithdrawalSavedPhoneNumbers.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default WithdrawalSavedPhoneNumbers;