import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 110
    };
  }

  render() {
    //width of child is 110
    const width = `${100 / parseInt(this.state.width / 110)}%`;
    return (
      <ScrollView>
        <View style={styles.container} onLayout={this.onLayout.bind(this)}>
          <View style={[styles.wrapper, { width: width }]}>
            <View style={styles.box}></View>
          </View>
          
        </View>
      </ScrollView>
    );
  }

  onLayout(e) {
    if (this.state.width !== e.nativeEvent.layout.width) {
      this.setState({
        width: e.nativeEvent.layout.width
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40
  },
  box: {
    width: 140,
    height: 100,
    backgroundColor: 'green',
  },
  wrapper: {
    marginVertical: 10, alignItems: 'center'
  }
});