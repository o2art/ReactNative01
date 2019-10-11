import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform
} from "react-native";

import Row from "./Row";
import Button from "./Button";
import Calculator, { initialState } from "./Calculator";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: 0,
      out: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Row>
            <Button text="1" onPress={this._onPress}></Button>
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

export default App;
