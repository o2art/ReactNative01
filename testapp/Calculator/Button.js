import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  button: {
    flex: 1,
    backgroundColor: "#9d9d9d",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderStyle: "dotted",
    borderWidth: 2,
    borderRadius: 2,
    margin: 2
  },
  special: {
    backgroundColor: "#676767"
  }
});

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      click: this.props.handleClick,
      clear: this.props.clear
    };
  }

  render() {
    buttonStyles = [styles.button];
    if (this.props.value != "C") {
      if (
        this.props.value == "/" ||
        this.props.value == "*" ||
        this.props.value == "-" ||
        this.props.value == "+"
      )
        buttonStyles.push(styles.special);
      return (
        <TouchableOpacity
          style={buttonStyles}
          onPress={() => this.state.click(this.state.value)}
        >
          <Text style={styles.text}>{this.state.value}</Text>
        </TouchableOpacity>
      );
    } else {
      buttonStyles.push(styles.special);
      return (
        <TouchableOpacity
          style={buttonStyles}
          onPress={() => this.state.click(this.state.value)}
          onLongPress={this.state.clear}
        >
          <Text style={styles.text}>{this.state.value}</Text>
        </TouchableOpacity>
      );
    }
  }
}

export default Button;
