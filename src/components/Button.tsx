import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';


interface IProps {
  startStopPressed: () => { }
  isRunning: boolean
}

interface IState {
  startStopButton: boolean
}
class Button extends React.Component<IProps, IState> {
  render() {
    let {isRunning} = this.props
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight style={[styles.button, styles.reset]}>
          <Text style={{color: 'white'}}>Reset</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.button, isRunning ? styles.stop : styles.start]} onPress={() => this.props.startStopPressed()}>
          <Text style={{color: isRunning ? '#e20f0f' : '#4ddb41'}}>{ isRunning ? 'Stop' : 'Start' }</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
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
  stop: {
    backgroundColor: '#590909'
  },
  reset: {
    backgroundColor: '#676867'
  }
});

const mapStateToProps = (state: IState) => {
  return {
    isRunning: state.startStopButton
  }
}

export default connect(mapStateToProps, actions)(Button);