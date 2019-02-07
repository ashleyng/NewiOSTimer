import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Timer from './components/Timer';
import Button from './components/Button';
import Laps from './components/Laps';
import reducers from './reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
        <View style={styles.top}>
          <Header />
          <Timer />
        </View>

        <View style={styles.bottom}>
          <Button/>
          <Laps/>
        </View>
      </View>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c'
  },
  top: {
    flex: 1.3
  },
  bottom: {
    flex: 1
  }
});
