import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
  displayAlert() {
    alert('dfkjkegh');
  }
  render() {
    return (
      <Button
        color={this.props.color}
        title="dgjkdhg"
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 150 }}>
        <AnyColorButton color="orange" />
        <Text>iefhoefh</Text>
      </View>
    );
  }
}
