import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

class Button extends React.Component {
  render() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight style={[styles.button, styles.reset]}>
          <Text style={{color: 'white'}}>Reset</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.button, styles.start]}>
          <Text style={{color: '#4ddb41'}}>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 15,
    paddingTop: 30,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    backgroundColor: '#235e1e'
  },
  reset: {
    backgroundColor: '#676867'
  }
});

export default Button;