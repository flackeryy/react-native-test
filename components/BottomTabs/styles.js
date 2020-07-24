import { StyleSheet } from 'react-native'

import { lightGrey } from '../../constants/constants'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  wrap: {
    flex: 1,
    backgroundColor: lightGrey,
    flexDirection: 'row'
  },
  touchableOpacity: {
    flex: 1    
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  forvardIcon: {
    color: '#fff'
  }
})