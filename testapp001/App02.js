import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  }
});

class App02 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <Text> Header </Text>
      </View>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: "yellow", flex: 3 }}>
        <Text> Content </Text>
      </View>
    );
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: "green", flex: 1 }}>
        <Text> Footer </Text>
      </View>
    );
  }
}

export default App02;
