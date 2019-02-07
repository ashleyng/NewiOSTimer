import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import TimeFormatter from 'minutes-seconds-milliseconds';

class Timer extends React.Component {
  render() {
    return (
      <View style={styles.timeWrapper}>
        <Text style={styles.timer}>00:00.29</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  timer: {
    fontSize: 80,
    fontWeight: '100',
    alignSelf: 'center',
  }
});

export default Timer;