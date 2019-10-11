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
            return <Item data={color} id={i} key={color + i} />;
          })}
        </View>
        <View style={styles.right}>
          {this.state.colors.map((color, i) => {
            return <Item data={color} id={i} key={i + color} />;
          })}
        </View>
        <View style={styles.left}>
          {this.state.colors.map((color, i) => {
            return <Item data={color} id={i} key={color + i} />;
          })}
        </View>
        <View style={styles.right}>
          {this.state.colors.map((color, i) => {
            return <Item data={color} id={i} key={i + color} />;
          })}
        </View>
        <View style={styles.left}>
          {this.state.colors.map((color, i) => {
            return <Item data={color} id={i} key={color + i} />;
          })}
        </View>
        <View style={styles.right}>
          {this.state.colors.map((color, i) => {
            return <Item data={color} id={i} key={i + color} />;
          })}
        </View>
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
        <Text style={{ alignSelf: "center" }}>{this.state.index}</Text>
      </View>
    );
  }
}

export default App04;
