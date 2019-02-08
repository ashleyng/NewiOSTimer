import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import TimeFormatter from 'minutes-seconds-milliseconds';
import { connect } from 'react-redux';
import * as actions from '../actions';

interface IProps {
  isRunning: boolean
  startTime: Date,
  timer: number
  timerInterval: (arg0: Date) => { }
}
interface IState {
  startStopButton: { isRunning: boolean, startTime: Date, timer: number }
  // timer: number
}
class Timer extends React.Component<IProps, IState> {
  private runningInterval: number
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <View style={styles.timeWrapper}>
        <Text style={styles.timer}>{TimeFormatter(this.props.timer)}</Text>
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
    fontWeight: '200',
    alignSelf: 'center',
    color: 'white'
  }
});

const mapStateToProps = (state: IState) => {
  // console.log(state.startStopButton.timer)
  return {
    isRunning: state.startStopButton.isRunning,
    startTime: state.startStopButton.startTime,
    timer: state.startStopButton.timer
  }
}

export default connect(mapStateToProps, actions)(Timer);