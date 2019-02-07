import React from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
} from 'react-native';

var laps = [
  { name: 'Lap 1', value: '00:00.01'},
  { name: 'Lap 2', value: '00:00.02'},
  { name: 'Lap 3', value: '00:00.03'},
  { name: 'Lap 4', value: '00:00.04'},
  { name: 'Lap 5', value: '00:00.05'}
]
let ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2
})
class Laps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(laps)
    }
  }

  _renderRow(rowData) {
    return (
      <View style={styles.lapRow}>
        <Text style={styles.lapData}>{rowData.name}</Text>
        <Text style={styles.lapData}>{rowData.value}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  lapData: {
    fontSize: 16,
    color: 'white'
  },
});

export default Laps;