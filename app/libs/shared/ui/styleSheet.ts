import { isIos } from 'constants/ui';
import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/helper/responsive-dimenssion';
import { colors } from 'theme/colors';
import { metrics } from 'theme/metrics';

export const commonStyles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: 20,
    backgroundColor: colors.lightGray,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  lottieLgContainer: {
    width: wp(45),
    height: hp(45),
  },
  lottieContainer: {
    width: wp(16),
    height: hp(16),
  },
  registrationFlowContainerHeader: {
    flexGrow: 1,
  },
  scrollViewContainerWithoutHeader: {
    flexGrow: 1,
    marginTop: isIos ? 30 : 0,
    paddingBottom: 60,
  },
  skeleton: {
    flexGrow: 1,
  },
  flexContainer: {
    flex: 1,
  },
  paddingContainer: {
    paddingBottom: 45,
  },
  logoutButtonStyle: {
    backgroundColor: colors.white,
  }
});
