import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  }
});

class App03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "blue", "pink", "yellow", "green", "brown"]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.colors.map((color, i) => {
          return <Item data={color} id={i} key={color} />;
        })}
      </View>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.data,
      index: this.props.id
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: this.state.color, flex: 1 }}>
        <Text> Item {this.state.index}</Text>
      </View>
    );
  }
}

export default App03;
