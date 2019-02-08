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
  startPressed: (arg0: Date) => { }
  stopPressed: () => { }
  timerInterval: (arg0: Date) => { }
  resetPressed:() => { }
  isRunning: boolean
}

interface IState {
  startStopButton: { isRunning: boolean, startTime: Date }
}
class Button extends React.Component<IProps, IState> {
  private runningInterval: number

  startStopPressed() {
    if (this.props.isRunning) {
      clearInterval(this.runningInterval)
      this.props.stopPressed()
    } else {
      this.props.startPressed(new Date())
      
      this.runningInterval = setInterval(() => {
        this.props.timerInterval(new Date())
      }, 30)
    }
  }

  resetLapPressed() {
    this.props.resetPressed()
  }

  render() {
    let {isRunning} = this.props
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight style={[styles.button, styles.reset]} onPress={this.resetLapPressed.bind(this)}>
          <Text style={{color: 'white'}}>Reset</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.button, isRunning ? styles.stop : styles.start]} onPress={this.startStopPressed.bind(this)}>
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
    isRunning: state.startStopButton.isRunning
  }
}

export default connect(mapStateToProps, actions)(Button);