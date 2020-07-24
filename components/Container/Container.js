import React from 'react'
import { View, Text } from 'react-native'

import MainContent from '../Content/Content'
import BottomTabs from '../BottomTabs/BottomTabs'

import styles from './styles'

class Container extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <MainContent style={styles.mainContent} />
        <BottomTabs style={styles.bottomTabs} />
      </View>
    )
  }
}

export default Container