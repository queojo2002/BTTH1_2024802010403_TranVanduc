import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class Project_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={myStyle.container}>
        <Button title="Button 1" onPress={() => alert("Hello TVD")}></Button>
        <TouchableOpacity style={myStyle.button} onPress={() => alert("Hello TVD 2")}>
        <Text style={myStyle.text}>             
            Button 2
        </Text>
        </TouchableOpacity>
      </View>
    );
  }

  
}

const myStyle = StyleSheet.create(
    {
        container: {
            flext: 1,
            justifyContent: 'center',
        },
        button: {
            backgroundcolor: "blue",
            marginTop: 10,
            alignItems: "center",
            padding: 10,
        },
        text:{
            color: "red",
            fontSize: 18,
        }
    }
)

