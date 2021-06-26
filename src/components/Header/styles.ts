import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 104,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight()
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700
  }
});