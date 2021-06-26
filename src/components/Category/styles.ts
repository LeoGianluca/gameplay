import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15
  },
  check: {
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 3,
    position: 'absolute',
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary100
  },
  checked: {
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    borderRadius: 3,
    position: 'absolute',
    backgroundColor: theme.colors.primary
  }
});