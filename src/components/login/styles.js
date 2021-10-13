import { Dimensions, StyleSheet } from 'react-native';
export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  bgImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.5,
  },
  icon: {
    color: '#fff',
    fontSize: 100,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
