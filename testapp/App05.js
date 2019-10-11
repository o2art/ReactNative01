import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    alignContent: "stretch",
    flexDirection: "row"
  },
  left: {
    flex: 1,
    flexDirection: "column"
  },
  right: {
    flex: 1,
    flexDirection: "column-reverse"
  }
});

class App04 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["#FF0083", "#2DBDE8", "#04CE9B", "#FFC709", "#FFCFC5", "#9CBAED"]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          {this.state.colors.map((color, i) => {
            return (
              <Item color={color} id={i} key={color + i} tcolor={"white"} />
            );
          })}
        </View>
        <View style={styles.right}>
          {this.state.colors.map((color, i) => {
            return (
              <Item color={color} id={i} key={i + color} tcolor={"black"} />
            );
          })}
        </View>
      </View>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View style={{ backgroundColor: this.props.color, flex: 1 }}>
        <Text style={{ color: this.props.tcolor }}> Item {this.props.id}</Text>
      </View>
    );
  }
}

export default App04;
