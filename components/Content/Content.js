import React from 'react';
import { View, Image, Animated, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { EventEmitter } from '../../utils/utils';

import styles from './styles';

class MainContent extends React.Component {
  state = {
    speed: 1000,
    move: new Animated.Value(0),
    isLoaded: 1
  };
  componentDidMount() {
    this.runAnimation();
    EventEmitter.on('CHANGE_TYPE', data => this.setState({ 
      speed: data === 1 ? 1000 : data === 2 ? 500 : data === 3 ? 100 : 1000 }
    ));
  }
  componentWillUnmount() {
    EventEmitter.removeListener('CHANGE_TYPE');
  }
  runAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.move, {
        toValue: 50,
        duration: this.state.speed,
      }),
      Animated.timing(this.state.move, {
        toValue: 0,
        duration: this.state.speed,
      }),
    ]).start(() => this.runAnimation());
  }
  startButtonHandler = () => {
    if (this.state.isLoaded !== 1) return false
    this.setState({ isLoaded: 2 }, () => {
      setTimeout(() => {
        this.setState({ isLoaded: 3 }, () => {
          EventEmitter.emit('SHOW_BUTTONS')
        })
      }, 5000)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoaded === 1 ?
        <View style={styles.absoluteCentered}>
          <TouchableOpacity
            onPress={this.startButtonHandler}
          >
            <Text style={styles.startButton}>LETS BEGIN</Text>
          </TouchableOpacity>
        </View> : this.state.isLoaded === 2 ?
        <ActivityIndicator size='large' style={styles.absoluteCentered} /> : false}
        <View style={[styles.centeredBlock, this.state.isLoaded !== 3 && styles.invisible]}>
          <View style={styles.gunContainer}>
            <Animated.Image
              source={require('../../assets/060158.png')}
              style={[
                styles.gun,
                {
                  transform: [
                    { rotate: '15deg' },
                    { translateY: 20 },
                    { translateX: this.state.move },
                  ],
                },
              ]}
            />
          </View>
          <View style={styles.images}>
            <Image
              source={require('../../assets/gvd1.png')}
              style={styles.image}
            />
          </View>
          <View style={[styles.images, styles.absoluteImage]}>
            <Image
              source={require('../../assets/gvd2.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default MainContent;
