import { StyleSheet, Dimensions } from 'react-native'

import { lightGrey } from '../../constants/constants'

export default StyleSheet.create({
  container: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    fontSize: 50,
    backgroundColor: lightGrey,
    color: '#fff',
    padding: 20
  },
  centeredBlock: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    backgroundColor: lightGrey,
    borderRadius: '150%'
  },
  invisible: {
    opacity: 0
  },
  absoluteCentered: {
    position: 'absolute',
    zIndex: 11111
  },
  images: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  image: {
    position: 'relative',
    width: '50%',
    height: '120%',
    zIndex: 11
  },
  absoluteImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1111
  },
  gunContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 111
  },
  gun: {
    width: '70%',
    height: '35%'
  }
})