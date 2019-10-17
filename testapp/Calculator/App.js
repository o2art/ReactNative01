import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    flex: 3
  },
  value: {
    flex: 1,
    backgroundColor: "#097973",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  valuetxt: {
    color: "#fff",
    fontSize: 32
  },
  result: {
    flex: 1,
    backgroundColor: "#097973",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  resulttxt: {
    color: "#fff",
    fontSize: 24
  },
  button: {
    flexDirection: "row",
    flex: 1
  },
  buttons: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#3c3c3c"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
      previousValue: "",
      result: "",
      blockDot: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleClick(val) {
    if (val != "C" && val != "=" && val != ".") {
      if (val == "/" || val == "*" || val == "+" || val == "-") {
        this.state.blockDot = false;
      }
      this.setState({
        currentValue: this.state.currentValue + val,
        previousValue: val,
        result: ""
      });
    } else if (val == "=") {
      let option = "";
      if (
        this.state.currentValue.toString().length == 0 ||
        isNaN(this.state.currentValue.substr(-1)) ||
        (isNaN(this.state.currentValue.substr(0, 2)) &&
          isNaN(this.state.currentValue.substr(0, 1))) ||
        this.state.currentValue.includes("00.") ||
        parseFloat(eval(this.state.currentValue)) == Infinity ||
        parseFloat(eval(this.state.currentValue)) == -Infinity ||
        isNaN(this.state.previousValue)
      ) {
        option = "err!";
      } else {
        option = parseFloat(eval(this.state.currentValue));
        if (option == "2137") alert("JP2GMD!");
        if (option == "69") alert("r00chańsko");
        if (option == "2115") alert("GENG GENG GENG");
      }
      this.setState({
        result: option
      });
    } else if (val == ".") {
      if (this.state.blockDot || this.state.previousValue == ".") return;
      else {
        this.setState({
          currentValue: this.state.currentValue + val,
          previousValue: val,
          result: "",
          blockDot: true
        });
      }
    } else {
      if (this.state.previousValue == ".") this.state.blockDot = false;
      this.setState({
        currentValue: this.state.currentValue.slice(
          0,
          this.state.currentValue.length - 1
        ),
        previousValue: this.state.currentValue.slice(
          this.state.currentValue.length - 2,
          this.state.currentValue.length - 1
        ),
        result: ""
      });
    }
  }

  clear() {
    this.setState({
      currentValue: "",
      previousValue: "",
      result: "",
      blockDot: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.value}>
          <Text style={styles.valuetxt}> {this.state.currentValue} </Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resulttxt}> {this.state.result} </Text>
        </View>
        <View style={styles.buttons}>
          <View style={{ flexDirection: "column", flex: 5 }}>
            <View style={styles.button}>
              <Button key={1} value={1} handleClick={this.handleClick} />
              <Button key={2} value={2} handleClick={this.handleClick} />
              <Button key={3} value={3} handleClick={this.handleClick} />
            </View>
            <View style={styles.button}>
              <Button key={4} value={4} handleClick={this.handleClick} />
              <Button key={5} value={5} handleClick={this.handleClick} />
              <Button key={6} value={6} handleClick={this.handleClick} />
            </View>
            <View style={styles.button}>
              <Button key={7} value={7} handleClick={this.handleClick} />
              <Button key={8} value={8} handleClick={this.handleClick} />
              <Button key={9} value={9} handleClick={this.handleClick} />
            </View>
            <View style={styles.button}>
              <Button key={"."} value={"."} handleClick={this.handleClick} />
              <Button key={0} value={0} handleClick={this.handleClick} />
              <Button key={"="} value={"="} handleClick={this.handleClick} />
            </View>
          </View>
          <View style={{ flexDirection: "column", flex: 2 }}>
            <View style={{ flexDirection: "column", flex: 1 }}>
              <Button
                key={"C"}
                value={"C"}
                handleClick={this.handleClick}
                clear={this.clear}
              />
              <Button key={"/"} value={"/"} handleClick={this.handleClick} />
              <Button key={"*"} value={"*"} handleClick={this.handleClick} />
              <Button key={"-"} value={"-"} handleClick={this.handleClick} />
              <Button key={"+"} value={"+"} handleClick={this.handleClick} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default App;
