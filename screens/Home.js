import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Home;
