import React from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
  ListViewDataSource,
} from 'react-native';
import { connect } from 'react-redux';


let ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2
})

interface IProps {
  dataSource: ListViewDataSource
}

interface IState {
  startStopButton: { laps: { [id: string]: { name: string, value: number }}}
}
class Laps extends React.Component<IProps> {

  _renderRow(rowData: { name: string, value: number }) {
    console.log(rowData)
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
          dataSource={this.props.dataSource}
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

const mapStateToProps = (state: IState) => {
  // console.log(state)
  let { laps } = state.startStopButton
  return {
    dataSource: ds.cloneWithRows(laps)
  }
}

export default connect(mapStateToProps, null)(Laps);