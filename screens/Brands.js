import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Text>Brands</Text>
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
export default Brands;
