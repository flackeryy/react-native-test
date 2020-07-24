import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { EventEmitter } from '../../utils/utils'
import styles from './styles'

class BottomTabs extends React.Component {
  state = {
    showButton: false
  }
  componentDidMount () {
    EventEmitter.on('SHOW_BUTTONS', () => this.setState({ showButton: true }))
  }
  componentWillUnmount () {
    EventEmitter.removeListener('SHOW_BUTTONS')
  }
  pressHandlrer = type => {
    EventEmitter.emit('CHANGE_TYPE', type)
  }
  render () {
    return (
      <View style={styles.container}>
        {this.state.showButton && <View style={styles.wrap}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {this.pressHandlrer(1)}}
          >
            <View style={styles.tab}>
              <Ionicons name='ios-arrow-forward' size={38} style={styles.forvardIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {this.pressHandlrer(2)}}
          >
            <View style={styles.tab}>
              <Ionicons name='ios-arrow-forward' size={38} style={styles.forvardIcon} />
              <Ionicons name='ios-arrow-forward' size={38} style={styles.forvardIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {this.pressHandlrer(3)}}
          >
            <View style={styles.tab}>
              <Ionicons name='ios-arrow-forward' size={38} style={styles.forvardIcon} />
              <Ionicons name='ios-arrow-forward' size={38} style={styles.forvardIcon} />
              <Ionicons name='ios-arrow-forward' size={38} style={styles.forvardIcon} />
            </View>
          </TouchableOpacity>
        </View>}
      </View>
    )
  }
}

export default BottomTabs