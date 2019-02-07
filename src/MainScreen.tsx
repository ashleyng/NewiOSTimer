import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Timer from './components/Timer';
import Button from './components/Button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Header />
          <Timer />
        </View>

        <View style={styles.bottom}>
        <Button/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c'
  },
  top: {
    flex: 1.5
  },
  bottom: {
    flex: 1
  }
});
