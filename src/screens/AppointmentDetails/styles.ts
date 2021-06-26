import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
    marginBottom: 30
  },
  bannerContent: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: 24,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 28,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    fontSize: 13,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400
  },
});