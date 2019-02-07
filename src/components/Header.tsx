import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Stopwatch</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F9F9F9'
  },
  title: {
    alignSelf: 'center',
    fontWeight: '600',
  },
});

export default Header;